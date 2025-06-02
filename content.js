const captchaBlock = document.getElementById('captchaBlock')

if (!captchaBlock) {
    window.location.reload()
}
else {
    const captchaInput = document.getElementById("captchaStr")
    captchaInput.focus()
}


