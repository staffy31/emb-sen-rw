<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50 py-14">
    <div class="max-w-5xl mx-auto px-6">
      <button @click="$router.push('/')" class="mb-6 flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span class="font-medium">{{ t('visa_form.back_home') }}</span>
      </button>
      
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">{{ t('visa_form.title') }}</h2>
        <p class="text-gray-600">{{ t('visa_form.subtitle') }}</p>
      </div>
      
      <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-2xl p-10 space-y-8">
        <!-- Personal Information Section -->
        <div class="border-l-4 border-green-600 pl-4">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">{{ t('visa_form.personal_info') }}</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.first_name') }} <span class="text-red-500">*</span></label>
            <input v-model="form.firstName" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.surname') }} <span class="text-red-500">*</span></label>
            <input v-model="form.surname" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <!-- Passport Picture Upload -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.passport_picture') }} <span class="text-red-500">*</span></label>
          <div class="flex items-center gap-4">
            <label class="flex-1 cursor-pointer">
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-all">
                <input type="file" @change="handleFileUpload" accept="image/*" required class="hidden">
                <div v-if="!passportPicture" class="space-y-2">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p class="text-sm text-gray-600">{{ t('visa_form.upload_photo') }}</p>
                </div>
                <div v-else class="space-y-2">
                  <img :src="passportPicture" class="mx-auto h-32 w-32 object-cover rounded-lg">
                  <p class="text-sm text-green-600">{{ t('visa_form.photo_uploaded') }}</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.dob') }} <span class="text-red-500">*</span></label>
            <input v-model="form.dob" type="date" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.place_of_birth') }} <span class="text-red-500">*</span></label>
            <input v-model="form.placeOfBirth" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.nationality') }} <span class="text-red-500">*</span></label>
            <input v-model="form.nationality" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.marital_status') }} <span class="text-red-500">*</span></label>
            <div class="flex gap-4 mt-3">
              <label class="flex items-center cursor-pointer">
                <input v-model="form.maritalStatus" type="radio" value="single" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
                <span class="text-gray-700">{{ t('visa_form.single') }}</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input v-model="form.maritalStatus" type="radio" value="married" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
                <span class="text-gray-700">{{ t('visa_form.married') }}</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input v-model="form.maritalStatus" type="radio" value="widowed" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
                <span class="text-gray-700">{{ t('visa_form.widowed') }}</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.home_address') }} <span class="text-red-500">*</span></label>
          <input v-model="form.homeAddress" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.occupation') }} <span class="text-red-500">*</span></label>
            <input v-model="form.occupation" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.business_address') }}</label>
            <input v-model="form.businessAddress" type="text" class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.phone') }} <span class="text-red-500">*</span></label>
            <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.email') }} <span class="text-red-500">*</span></label>
            <input v-model="form.email" type="email" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <!-- Passport Information Section -->
        <div class="border-l-4 border-green-600 pl-4 mt-10">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">{{ t('visa_form.passport_info') }}</h3>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.passport_type') }} <span class="text-red-500">*</span></label>
            <input v-model="form.passportType" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.passport_number') }} <span class="text-red-500">*</span></label>
            <input v-model="form.passportNumber" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.issued_on') }} <span class="text-red-500">*</span></label>
            <input v-model="form.issuedOn" type="date" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.expiration_date') }} <span class="text-red-500">*</span></label>
            <input v-model="form.expirationDate" type="date" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <!-- Visa Details Section -->
        <div class="border-l-4 border-green-600 pl-4 mt-10">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">{{ t('visa_form.visa_details') }}</h3>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <label class="block text-sm font-semibold text-gray-700 mb-3">{{ t('visa_form.number_of_entries') }} <span class="text-red-500">*</span></label>
          <div class="flex gap-6">
            <label class="flex items-center cursor-pointer">
              <input v-model="form.numberOfEntries" type="radio" value="single" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.single_entry') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.numberOfEntries" type="radio" value="multiple" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.multiple_entry') }}</span>
            </label>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <label class="block text-sm font-semibold text-gray-700 mb-3">{{ t('visa_form.validation_period') }} <span class="text-red-500">*</span></label>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer">
              <input v-model="form.validationPeriod" type="radio" value="transit" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.transit') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.validationPeriod" type="radio" value="short_stay" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.short_stay') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.validationPeriod" type="radio" value="long_stay" class="w-4 h-4 text-green-600 focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.long_stay') }}</span>
            </label>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <label class="block text-sm font-semibold text-gray-700 mb-3">{{ t('visa_form.purpose_of_visit') }} <span class="text-red-500">*</span></label>
          <div class="grid md:grid-cols-2 gap-3">
            <label class="flex items-center cursor-pointer">
              <input v-model="form.purposeOfVisit" type="checkbox" value="business" class="w-4 h-4 text-green-600 rounded focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.business') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.purposeOfVisit" type="checkbox" value="health" class="w-4 h-4 text-green-600 rounded focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.health') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.purposeOfVisit" type="checkbox" value="mission" class="w-4 h-4 text-green-600 rounded focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.mission') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.purposeOfVisit" type="checkbox" value="holidays" class="w-4 h-4 text-green-600 rounded focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.holidays') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.purposeOfVisit" type="checkbox" value="study" class="w-4 h-4 text-green-600 rounded focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.study') }}</span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input v-model="form.purposeOfVisit" type="checkbox" value="other" class="w-4 h-4 text-green-600 rounded focus:ring-green-500 mr-2">
              <span class="text-gray-700">{{ t('visa_form.other') }}</span>
            </label>
          </div>
          <input v-if="form.purposeOfVisit.includes('other')" v-model="form.otherPurpose" type="text" :placeholder="t('visa_form.specify_other')" class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none mt-3">
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.means_of_transportation') }} <span class="text-red-500">*</span></label>
            <input v-model="form.transportation" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.date_of_entry') }} <span class="text-red-500">*</span></label>
            <input v-model="form.dateOfEntry" type="date" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.address_in_senegal') }} <span class="text-red-500">*</span></label>
          <input v-model="form.addressInSenegal" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
        </div>

        <!-- Contact Person Section -->
        <div class="border-l-4 border-green-600 pl-4 mt-10">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">{{ t('visa_form.contact_person') }}</h3>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.contact_full_name') }} <span class="text-red-500">*</span></label>
          <input v-model="form.contactFullName" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.contact_address') }} <span class="text-red-500">*</span></label>
          <input v-model="form.contactAddress" type="text" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">{{ t('visa_form.contact_phone') }} <span class="text-red-500">*</span></label>
          <input v-model="form.contactPhone" type="tel" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none">
        </div>

        <button type="submit" class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
          {{ t('visa_form.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const passportPicture = ref(null)

const form = ref({
  firstName: '',
  surname: '',
  dob: '',
  placeOfBirth: '',
  nationality: '',
  maritalStatus: '',
  homeAddress: '',
  occupation: '',
  businessAddress: '',
  phone: '',
  email: '',
  passportType: '',
  passportNumber: '',
  issuedOn: '',
  expirationDate: '',
  numberOfEntries: '',
  validationPeriod: '',
  purposeOfVisit: [],
  otherPurpose: '',
  transportation: '',
  dateOfEntry: '',
  addressInSenegal: '',
  contactFullName: '',
  contactAddress: '',
  contactPhone: ''
})

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      passportPicture.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  console.log('Passport picture:', passportPicture.value)
  alert(t('visa_form.success_message'))
}
</script>
