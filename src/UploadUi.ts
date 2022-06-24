import {html, LitElement} from 'lit';
import {createRef, ref, Ref} from "lit-html/directives/ref.js";

import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import Dashboard from "@uppy/dashboard";

export class UploadUi extends LitElement {

  private dropZone: Ref<HTMLDivElement> = createRef();

  connectedCallback() {
    super.connectedCallback();
    const uppy = new Uppy()
        .use(Dashboard, {
          trigger: '#select-files',
          target: this.dropZone.value
        })
        .use(Tus, { endpoint: 'https://api2.transloadit.com' })

    uppy.on('complete', (result) => {
      console.log('Upload complete! We’ve uploaded these files:', result.successful)
    })
  }

  render() {
    return html`
      
        
         <div ${ref(this.dropZone)}>Edit </div>
       
     
    `;
  }

}
