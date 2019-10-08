Vue.component('editable_field', {
    template: `
    <div class="editable row">
        <div class="col-4 border">
            {{field_title}}
        </div>

        <div class="col-8 border">
            <a href="#" @click="prepareForm">
                {{editable_text}}
            </a>

            <div v-if="showed_popup" class="popover top popup">
            
                <div class="arrow"></div>
                <h3 class="popover-title">
                    {{popup_title}}
                </h3>

                <form class="popover-content">
                    <input class="editable-input" type="text" v-model="text_in_input"/>
                    <div class="editable-buttons">
                        <button class="btn btn-primary btn-sm editable-submit" type="submit" @click="insertText">
                            <i class="icon-ok icon-white"></i>
                        </button>
                        <button class="btn btn-default btn-sm editable-cancel" type="button" @click="hidePopup">
                            <i class="icon-ban-circle"></i>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            text_in_input: '',
            showed_popup: false
        }
    },
    props: {
        'editable_text': String,
        'field_title': String,
        'popup_title': String,
    },
    methods: {
        prepareForm: function() {
            this.text_in_input = this.editable_text;
            this.showed_popup = true;
        },
        insertText: function() {
            this.editable_text = this.text_in_input;
            this.showed_popup = false;
            console.log('insertText');
        },
        hidePopup: function() {
            this.showed_popup = false;
            console.log('hidePopup');
        }
    }
})

new Vue ({
    el: '#app',

});

