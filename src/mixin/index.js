import { deepClone } from './utils'

const mixin = {
    data() {
        return {
            ResetFormData: {}
        }
    },
    methods: {
        resetForm() {
            this.form = deepClone(this.ResetFormData)
            this.setDate = null
        },
        cloneForm() {
            this.ResetFormData = deepClone(this.form)
        }
    },
    mounted() {
        this.cloneForm()
    }
}

export default mixin