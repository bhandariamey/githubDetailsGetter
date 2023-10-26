// is this reflecting there?

const formID = document.getElementById("form");
const main = document.getElementById("main");

formID.addEventListener("change", (e) => {
  var userName = e.target.value;

  async function getData(userName) {
    document.getElementById("search").placeholder = "Changed";
    var res = await fetch(`https://api.github.com/users/${userName}`);
    var resJson = await res.json();

    var userDetails = {
      name: resJson.name,
      avatar: resJson.avatar_url,
      bio: resJson.bio,
      followers: resJson.followers,
      following: resJson.following,
      repoCount: resJson.public_repos,
      twitterUserName: resJson.twitter_username,
      location: resJson.location
    };

    main.innerHTML = `
    <div id="card" class="container p-5 bg-secondary">
        <div class="row">
          <div class="col-4">
            <img
              id = "userImage"
              src=${userDetails.avatar}
              alt=""
            />
          </div>
          <div class="col-8">
            <div id="name" class="row">${userDetails.name}</div>
            <div class="row values bio">
             ${userDetails.bio}
            </div>
            <div class="row">
              <div class="d-flex justify-content-between">
                <div><span class="keys">Followers:</span><span class="values"> ${userDetails.followers}</span></div>
                <div><span class="keys">Following:</span> <span class="values">${userDetails.following}</span></div>
                <div><span class="keys"> Repos:</span>  <span class="values">${userDetails.repoCount}</span></div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex justify-content-between">
                <div><span class="keys">Twitter:</span> <span class="values">${userDetails.twitterUserName}</span></div>
                <div><span class="keys">Location:</span> <span class="values">${userDetails.location}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  getData(userName);
});
