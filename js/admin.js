import { supabase } from './supabase-config.js'

const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const loginBtn = document.getElementById('loginBtn')
const logoutBtn = document.getElementById('logoutBtn')
const authStatus = document.getElementById('authStatus')

const restaurantNameEl = document.getElementById('restaurant_name')
const phoneEl = document.getElementById('phone')
const whatsappEl = document.getElementById('whatsapp')
const addressEl = document.getElementById('address')
const primaryColorEl = document.getElementById('primary_color')
const secondaryColorEl = document.getElementById('secondary_color')
const saveSettingsBtn = document.getElementById('saveSettingsBtn')

const galleryTitleEl = document.getElementById('gallery_title')
const galleryCategoryEl = document.getElementById('gallery_category')
const galleryFileEl = document.getElementById('gallery_file')
const uploadGalleryBtn = document.getElementById('uploadGalleryBtn')
const galleryList = document.getElementById('galleryList')

const categoryNameEl = document.getElementById('category_name')
const categoryFileEl = document.getElementById('category_file')
const addCategoryBtn = document.getElementById('addCategoryBtn')
const categoriesList = document.getElementById('categoriesList')

const itemCategoryEl = document.getElementById('item_category')
const itemNameEl = document.getElementById('item_name')
const itemDescriptionEl = document.getElementById('item_description')
const itemPriceEl = document.getElementById('item_price')
const itemFileEl = document.getElementById('item_file')
const addItemBtn = document.getElementById('addItemBtn')
const menuItemsList = document.getElementById('menuItemsList')

async function login() {
  const { error } = await supabase.auth.signInWithPassword({
    email: emailEl.value,
    password: passwordEl.value
  })
  authStatus.textContent = error ? error.message : 'تم تسجيل الدخول'
}

async function logout() {
  await supabase.auth.signOut()
  authStatus.textContent = 'تم تسجيل الخروج'
}

async function loadSettings() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .limit(1)
    .single()

  if (error || !data) return

  restaurantNameEl.value = data.restaurant_name || ''
  phoneEl.value = data.phone || ''
  whatsappEl.value = data.whatsapp || ''
  addressEl.value = data.address || ''
  primaryColorEl.value = data.primary_color || ''
  secondaryColorEl.value = data.secondary_color || ''
}

async function saveSettings() {
  const { data: existing } = await supabase
    .from('site_settings')
    .select('id')
    .limit(1)
    .single()

  const payload = {
    restaurant_name: restaurantNameEl.value,
    phone: phoneEl.value,
    whatsapp: whatsappEl.value,
    address: addressEl.value,
    primary_color: primaryColorEl.value,
    secondary_color: secondaryColorEl.value
  }

  let result
  if (existing?.id) {
    result = await supabase.from('site_settings').update(payload).eq('id', existing.id)
  } else {
    result = await supabase.from('site_settings').insert(payload)
  }

  alert(result.error ? result.error.message : 'تم حفظ الإعدادات')
}

async function uploadToBucket(bucket, file) {
  const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileName, file)

  if (uploadError) throw uploadError

  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName)
  return data.publicUrl
}

async function loadGallery() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('id', { ascending: false })

  if (error) return

  galleryList.innerHTML = ''
  data.forEach((img) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.innerHTML = `
      <strong>${img.title || ''}</strong>
      <div>${img.category || ''}</div>
      <img class="preview" src="${img.image_url}" alt="">
      <button data-id="${img.id}" class="delete-gallery">حذف</button>
    `
    galleryList.appendChild(div)
  })

  document.querySelectorAll('.delete-gallery').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id
      await supabase.from('gallery_images').delete().eq('id', id)
      loadGallery()
    })
  })
}

async function uploadGalleryImage() {
  const file = galleryFileEl.files[0]
  if (!file) return alert('اختر صورة أولاً')

  try {
    const imageUrl = await uploadToBucket('gallery-images', file)

    const { error } = await supabase.from('gallery_images').insert({
      title: galleryTitleEl.value,
      category: galleryCategoryEl.value,
      image_url: imageUrl
    })

    if (error) return alert(error.message)

    galleryTitleEl.value = ''
    galleryCategoryEl.value = ''
    galleryFileEl.value = ''
    loadGallery()
    alert('تم رفع صورة الغاليري')
  } catch (err) {
    alert(err.message)
  }
}

async function loadCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) return

  categoriesList.innerHTML = ''
  itemCategoryEl.innerHTML = '<option value="">اختر القسم</option>'

  data.forEach((cat) => {
    const option = document.createElement('option')
    option.value = cat.id
    option.textContent = cat.name
    itemCategoryEl.appendChild(option)

    const div = document.createElement('div')
    div.className = 'item'
    div.innerHTML = `
      <strong>${cat.name}</strong>
      ${cat.image_url ? `<img class="preview" src="${cat.image_url}" alt="">` : ''}
      <button data-id="${cat.id}" class="delete-category">حذف</button>
    `
    categoriesList.appendChild(div)
  })

  document.querySelectorAll('.delete-category').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id
      await supabase.from('categories').delete().eq('id', id)
      loadCategories()
      loadMenuItems()
    })
  })
}

async function addCategory() {
  const file = categoryFileEl.files[0]
  let imageUrl = ''

  try {
    if (file) {
      imageUrl = await uploadToBucket('site-assets', file)
    }

    const { error } = await supabase.from('categories').insert({
      name: categoryNameEl.value,
      image_url: imageUrl
    })

    if (error) return alert(error.message)

    categoryNameEl.value = ''
    categoryFileEl.value = ''
    loadCategories()
    alert('تمت إضافة القسم')
  } catch (err) {
    alert(err.message)
  }
}

async function loadMenuItems() {
  const { data, error } = await supabase
    .from('menu_items')
    .select('*, categories(name)')
    .order('id', { ascending: false })

  if (error) return

  menuItemsList.innerHTML = ''
  data.forEach((item) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.innerHTML = `
      <strong>${item.name}</strong>
      <div>${item.categories?.name || ''}</div>
      <div>${item.price || ''}</div>
      <div>${item.description || ''}</div>
      ${item.image_url ? `<img class="preview" src="${item.image_url}" alt="">` : ''}
      <button data-id="${item.id}" class="delete-item">حذف</button>
    `
    menuItemsList.appendChild(div)
  })

  document.querySelectorAll('.delete-item').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id
      await supabase.from('menu_items').delete().eq('id', id)
      loadMenuItems()
    })
  })
}

async function addMenuItem() {
  const file = itemFileEl.files[0]
  let imageUrl = ''

  try {
    if (file) {
      imageUrl = await uploadToBucket('menu-images', file)
    }

    const { error } = await supabase.from('menu_items').insert({
      category_id: itemCategoryEl.value || null,
      name: itemNameEl.value,
      description: itemDescriptionEl.value,
      price: itemPriceEl.value,
      image_url: imageUrl
    })

    if (error) return alert(error.message)

    itemNameEl.value = ''
    itemDescriptionEl.value = ''
    itemPriceEl.value = ''
    itemFileEl.value = ''
    loadMenuItems()
    alert('تمت إضافة العنصر')
  } catch (err) {
    alert(err.message)
  }
}

loginBtn.addEventListener('click', login)
logoutBtn.addEventListener('click', logout)
saveSettingsBtn.addEventListener('click', saveSettings)
uploadGalleryBtn.addEventListener('click', uploadGalleryImage)
addCategoryBtn.addEventListener('click', addCategory)
addItemBtn.addEventListener('click', addMenuItem)

loadSettings()
loadGallery()
loadCategories()
loadMenuItems()
