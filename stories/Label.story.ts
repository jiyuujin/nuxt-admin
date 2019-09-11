import { storiesOf } from '@storybook/vue'
import '../client/assets/main.scss'

import Label from '../client/components/atoms/Label.vue'

storiesOf('Label', module).add('list', () => ({
    components: {
        'j-label': Label
    },
    template: `
    <div>
      <div class="flex-block">
        <div class="showcase">
          <div>
            <j-label text="追加する" bg-color="#42b883" color="#fff" />
          </div>
        </div>
      </div>
    </div>
  `
}))
