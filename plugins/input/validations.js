export default {
    props: {
        data: {
            type: String,
            required: false
        },
        options: {
            type: Object,
            required: true
        },
        required: {
            type: Boolean,
            required: false
        },
        min: {
            type: Number,
            required: false
        },
        max: {
            type: Number,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        highlight: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            errorMessage: []
        }
    },

    methods: {
        validate() {
            this.errorMessage = []
            this.CheckRequired()
            this.ChackMin()
            this.CheckMax()
            this.CheckType()
            console.log(this.errorMessage)

        },
        CheckRequired() {
            if (this.required) {
                if (this.inputVal === '') {
                    this.errorMessage.push("این فیلد باید پر شود")
                }
            }

        },
        ChackMin() {
            if (this.min) {
                if (this.inputVal.length < this.min) {
                    this.errorMessage.push(" حداقل تعداد کاراکتر" + this.min + " میباشد ")
                }
            }
        },
        CheckMax() {
            if (this.max) {
                if (this.inputVal.length > this.max) {
                    this.errorMessage.push("حداکثر تعداد کاراکتر " + this.max + " میباشد ")
                }
            }
        },
        CheckType() {
            if (this.type) {
                if (typeof (this.type) === "number") {
                    if (!this.inputVal.match(/[0-9]/i)) {
                        this.errorMessage.push("لطفا عدد وارد کنید")
                    }
                }
            }
        }

    },

}