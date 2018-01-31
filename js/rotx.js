new Vue({
    el: '#rotx',
    data: {
        rotValue: 13,
        woord: "",
        shifted : ""
    },
    watch: {
        rotValue: function() {
            if (this.rotValue === 0) this.rotValue = 25;
            if (this.rotValue === 26) this.rotValue = 1;
            this.shifted = this.caesarShift(this.woord, this.rotValue);
        },
        woord: function () {
            this.shifted = this.caesarShift(this.woord, this.rotValue);            
        }
    },
    methods: {
        caesarShift: function(text, shift) {
            var result = '';
            for (let i = 0; i < text.length; i++) {
                const c = text.charCodeAt(i);
                if (c >= 65 && c <= 90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);
                else if (c >= 97 && c <= 122)
                    // Uppercase
                    result += String.fromCharCode((c - 97 + shift) % 26 + 97); // Lowercase
                else result += text.charAt(i); // Copy
            }
            return result;
        }
    }
});