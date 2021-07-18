<template>
  <main-template :user-status="userStatus">
    <modal title="問い合わせを確認する" @cancel="cancel">
      <div class="contact">
        <div v-for="item in contacts.item" :key="item.id">
          <div v-if="item.page === state.activePage">
            <div class="px-4 py-2">
              {{ titleText(item) }}
            </div>
          </div>
        </div>

        <j-pagination
          :items="contacts.item !== undefined ? contacts.item : []"
          :page="state.activePage"
          :per-page="state.perPage"
          @handlePage="applyPage"
        />
      </div>
    </modal>
  </main-template>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'

import UserComposable from '~/composables/user'
import ContactComposable from '~/composables/contact'

import { fetchContacts } from '~/services/contactService'

const MainTemplate = () => import('~/components/MainTemplate.vue')
const Modal = () => import('~/components/Modal.vue')

export default defineComponent({
  components: {
    MainTemplate,
    Modal
  },
  middleware: 'auth',
  setup(props: {}, ctx: SetupContext) {
    const userModule = UserComposable(props, ctx)
    const contactModule = ContactComposable(props, ctx)
    return { ...userModule, ...contactModule }
  },
  async asyncData() {
    const contacts = await fetchContacts()
    return {
      contacts: contacts
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/_contact';
</style>
