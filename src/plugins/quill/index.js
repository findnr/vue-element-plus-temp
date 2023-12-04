
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export function setupQuill(app) {
    app.component('QuillEditor', QuillEditor)
}
