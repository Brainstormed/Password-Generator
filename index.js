function generate() {
    function random() {
        return Math.floor(Math.random() * 89)
    }

    let length = document.getElementById("length").value;
    let output = document.getElementById("output");
    let mapRef = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()`~[]/<>,.:;\"'{}\\?"
    let mapIn = []
    let passOut = []
    let passStr = ""

    if (length == 0) {
        output.textContent = "Please enter an actual number!"
    } else {
        for (let i = 0; i < length; i++) {
            mapIn.push(random())
        }

        for (let i = 0; i < length; i++) {
            passOut[i] = mapRef[mapIn[i]]
        }

        for (let i = 0; i < length; i++) {
            passStr = passStr.concat(passOut[i])
        }

        output.textContent = passStr
        output.style.opacity = 1
        output.style.userSelect = "all"
    }
}

