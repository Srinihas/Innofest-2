class Form {
    constructor() {
        this.inputName = createInput("").attribute("placeholder", "Enter your name");
        this.inputschool = createInput("").attribute("placeholder", "Enter your school name");
        this.doneButton = createButton("Submit");
        this.mainLogo = createImg('../assets/logo.png', 'app logo');
    }

    setPositionAndWidth() {
        this.inputName.position(windowWidth / 2 - 110, 25);
        this.inputschool.position(windowWidth / 2 - 110, 75);
        this.doneButton.position(windowWidth / 2 - 115, 125);
        textSize(40);
        
        push();
        fill("red");
        rect(this.inputName.x, this.inputName.y, this.inputName.width, this.inputName.height);
        rect(this.inputschool.x, this.inputschool.y, this.inputschool.width, this.inputschool.height);
        pop();

        this.inputName.class("customInput");
        this.inputschool.class("customInput");
        this.doneButton.class("customButton");
        this.mainLogo.class("gameTitle");
    }

    start() {
        this.doneButton.mouseClicked(() => this.mainArray());
        this.setPositionAndWidth();
    }

    hide() {
        this.inputName.x = windowWidth + 10000000000;
        this.inputschool.x = windowWidth + 10000000000;
        this.doneButton.x = windowWidth + 10000000000;
        push();
            textSize(32);
            text('THIS IS WHERE ALL THE VIDEOS WILL GO', 10, 30);
        pop();
    }

    mainArray(){
        var array = []
        array.push({"schoolName":"GEMS New Millenium School"});
        array.push({"studentName":"Arjun Prabhu"}, {"studentName2":"Srinihas Akkineni"});

        if ((this.inputschool.value() === array[0].schoolName && this.inputName.value() === array[1].studentName) || (this.inputschool.value() === array[0].schoolName && this.inputName.value() === array[2].studentName2)) {
            allowChangeScreen = true;
        } else if ((this.inputschool.value() === array[0].schoolName && this.inputName.value() !== array[2].studentName2 && this.inputName.value() !== '') || (this.inputschool.value() === array[0].schoolName && this.inputName.value() !== array[1].studentName && this.inputName.value() !== '')){
            swal({
                title: 'Sorry',
                text: 'Your name is not present in our database',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
            this.inputName = createInput("").attribute("placeholder", "Enter your name");
            this.inputschool = createInput("").attribute("placeholder", "Enter your school name");
        } else if ((this.inputschool.value() !== array[0].schoolName && this.inputName.value() === array[2].studentName2 && this.inputschool.value() !== '') || (this.inputschool.value() !== array[0].schoolName && this.inputName.value() === array[1].studentName && this.inputschool.value() !== '')) {
            swal({
                title: 'Sorry',
                text: 'Your school is not present in our database',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
            this.inputName = createInput("").attribute("placeholder", "Enter your name");
            this.inputschool = createInput("").attribute("placeholder", "Enter your school name");
        }
    }
}