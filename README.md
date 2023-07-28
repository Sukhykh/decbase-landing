# Decbase Landing
Completed 28-07-2023

### How to start
For the correct display of some data (in particular, svg), it is necessary to start the server.

### Realized "crutches"
To implement the functionality of closing the page when the user is inactive, the entire project is placed on site.html and opened from index.html with the script: 
```
window.open('./site.html', '_blank');
```

### Random API 
Three different APIs were used to generate random content above the 'header' tag:
- 'https://api.adviceslip.com/advice'
- 'https://v2.jokeapi.dev/joke/Programming?type=single'
- 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'

Content is generated every 20 seconds. 
You can automatically restore it with the 'click'.

### 'What we do' section
Information is retrieved from 'https://jsonplaceholder.typicode.com/posts'.

The received information is not stored on the user's side.

After the filter buttons, the first five posts of the first three users are displayed.

The "ALL" filter displays the first posts of each user.

Pay attention to the possible retention of focus on the filter buttons.

### 'Testimonials' section
All data is obtained from a JSON file hosted locally. 

The slider is made without using external libraries.

### 'Latest news' section
All data is obtained from a JSON file hosted locally.
