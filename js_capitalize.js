function capitalize() {
    this.capitalized = "";

    let words_in_string = this.split(" ");

    if(words_in_string.length != 0)
    {
        words_in_string.forEach((word,word_index) => {
            let lowercase_word = word.toLowerCase();

            let capitalized_first_letter = word.charAt(0).toUpperCase();

            let capitalized_word = capitalized_first_letter + lowercase_word.slice(1);

            this.capitalized += capitalized_word;

            if((word_index + 1) < words_in_string.length)
            {
                this.capitalized += " ";
            }
        });
    }

    return this.capitalized;
}
String.prototype.capitalize = capitalize;