function my_display_alpha(current){
    while (current > 65)
    {
        process.stdout.write(String.fromCharCode(current));
        current--;
    }
    console.log(String.fromCharCode(65));
}

my_display_alpha(90);

