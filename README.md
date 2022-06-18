# Welcome to Shyche — Share your niche 

[Shyche](shyche.herokuapp.com/#/) is a social media app where you can browse niche hobbies and connect with professionals online.

## Techonologies used

- Express.js
- MongoDB
- React / Redux
- JavaScript / Axios
- HTML5 and CSS
- AWS S3 and AWS IAM
- Heroku

## Code Snippet

Herre's a little preview of our code:

```
handleSubmit(e) {
        e.preventDefault();
        
        // we handle the errors within the forms
        this.props.clearReviewErrors();
        let reviewFormErrors = document.getElementById("review-form-errors");
        reviewFormErrors.classList.remove("hidden");
        
        // allowing for a seamless and comfortable user experience
        document.addEventListener("click", ()=> {
            reviewFormErrors.classList.add("hidden");
            document.removeEventListener("click", ()=> {});
        });

        // updating information in real time
        let newReview = this.state;
        this.props.createReview(newReview)
            .then(()=>this.props.getReviews())
            .then(()=> this.successfulReview())
            .then(()=> document.querySelectorAll(".star").forEach(ele => {
                ele.checked = false;
            }))
            // displaying only what's necessary each time
            .then(()=> this.props.getReviews());
    }
    ```

## Features

- ### User Auth / Professional Auth

![gif](https://github.com/hyubink/shyche/blob/assets/login.gif)
![gif](https://github.com/hyubink/shyche/blob/assets/prof-auth.gif)

Create and upgrade your own account on Shyche that allows you to browse through endless categories of uncommon activities and connect with the peculiar persons behind them.

- ### Videos CRUD

![gif](https://github.com/hyubink/shyche/blob/assets/video-upload.gif)

Once signed in you can add, edit and delete videos to share your own unusual hobby on the platform.

- ### Live Chat

![gif](https://github.com/hyubink/shyche/blob/assets/live-chat.gif)

Get to know the people behind each hobby and expand your horizons.

- ### Bookings / Reviews CRUD

![gif](https://github.com/hyubink/shyche/blob/assets/bookings.gif)

Book sessions with your favorite professionals to learn more about what they do and review their work.

- ### Search Bar

![gif](https://github.com/hyubink/shyche/blob/assets/search.gif)

Find specific videos quickly by searching them by name and category.

- ### Splash Page

![gif](https://github.com/hyubink/shyche/blob/assets/splash.gif)

- ### Home Page

![gif](https://github.com/hyubink/shyche/blob/assets/homepage.gif)

- ### User Page

![gif](https://github.com/hyubink/shyche/blob/assets/userpage.gif)

- ### Categories Page

![gif](https://github.com/hyubink/shyche/blob/assets/categories.gif)

- ### Video Page

![gif](https://github.com/hyubink/shyche/blob/assets/video-show.gif)
