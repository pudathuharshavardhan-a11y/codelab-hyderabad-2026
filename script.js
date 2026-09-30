/* ===================================
   MOBILE MENU
=================================== */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}


/* ===================================
   ROADMAP
=================================== */

const roadmapData = {

    1: {
        title: "01 — Create an Issue",
        text:
            "Start with a real development problem. Define what needs to be built or improved."
    },

    2: {
        title: "02 — Plan the Solution",
        text:
            "Break the problem into smaller tasks and decide how the project should be implemented."
    },

    3: {
        title: "03 — Write the Code",
        text:
            "Build the required functionality using your development environment and coding tools."
    },

    4: {
        title: "04 — Test the Project",
        text:
            "Run the project, find problems and test the implementation before submitting changes."
    },

    5: {
        title: "05 — Review the Changes",
        text:
            "Inspect the implementation, improve the code and prepare the changes for review."
    },

    6: {
        title: "06 — Ship the Project",
        text:
            "Complete the workflow and prepare the finished project for deployment or release."
    }

};


function showStep(number) {

    const description =
        document.getElementById("roadDescription");

    const title =
        description.querySelector("h3");

    const text =
        description.querySelector("p");

    title.textContent =
        roadmapData[number].title;

    text.textContent =
        roadmapData[number].text;


    const steps =
        document.querySelectorAll(".road-step");

    steps.forEach((step, index) => {

        step.classList.remove("active");

        if (index === number - 1) {

            step.classList.add("active");

        }

    });

}


/* ===================================
   FAQ
=================================== */

function toggleFAQ(button) {

    const item =
        button.parentElement;

    item.classList.toggle("open");

}


/* ===================================
   REGISTRATION
=================================== */

const form =
    document.getElementById(
        "registrationForm"
    );


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const registration = {

            name:
                document.getElementById(
                    "name"
                ).value,

            email:
                document.getElementById(
                    "email"
                ).value,

            phone:
                document.getElementById(
                    "phone"
                ).value,

            college:
                document.getElementById(
                    "college"
                ).value,

            experience:
                document.getElementById(
                    "experience"
                ).value,

            registeredAt:
                new Date().toLocaleString()

        };


        let registrations =
            JSON.parse(
                localStorage.getItem(
                    "codelabRegistrations"
                )
            ) || [];


        registrations.push(registration);


        localStorage.setItem(
            "codelabRegistrations",
            JSON.stringify(
                registrations
            )
        );


        document.getElementById(
            "formMessage"
        ).textContent =
            "✓ Registration submitted successfully!";


        form.reset();

    }
);


/* ===================================
   CLOSE MOBILE MENU
=================================== */

document.querySelectorAll(
    "#navMenu a"
).forEach(link => {

    link.addEventListener(
        "click",
        function() {

            document
                .getElementById("navMenu")
                .classList
                .remove("show");

        }
    );

});


/* ===================================
   CONSOLE MESSAGE
=================================== */

console.log(
    "CODELAB Hyderabad 2026 website loaded successfully."
);
