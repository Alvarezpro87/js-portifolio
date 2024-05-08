

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Alvarezpro87/js-portifolio/main/assets/data/profile.jason';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
