async function get_papermc(project,version) {
    let page = await fetch("https://papermc.io/api/v2/projects/"+project+"/versions/"+version);
    let text = await page.text();
    let data = JSON.parse(text);
    let latest = data.builds[data.builds.length-1];
    console.log(latest);
    window.location = "https://papermc.io/api/v2/projects/"+project+"/versions/"+version+"/builds/"+latest+"/downloads/"+project+"-"+version+"-"+latest+".jar"
}
