function my_display_alpha(current){
    while (current < 90)
    {
        process.stdout.write(String.fromCharCode(current));
        current++;
    }
    console.log(String.fromCharCode(90));
}

my_display_alpha(65);
