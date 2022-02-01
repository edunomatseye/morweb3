// connect to Moralis server
const serverUrl = "https://awm17zydguvq.usemoralis.com:2053/server";
const appId = "q4o4oEY2pXklY15ICmeqTUwbCf31cTJ4uLJoZlHp";
Moralis.start({ serverUrl, appId });

// add from here down
async function logIn() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate();
      localStorage.setItem('moralis_user', JSON.stringify(user))
    }
    console.log("logged in user:", user);
    window.location.href ='dashboard.html'
  }

  async function logOut() {
    await Moralis.User.logOut();
    localStorage.removeItem("moralis_user")
    console.log("logged out");
    window.location.href = 'index.html';
  }

