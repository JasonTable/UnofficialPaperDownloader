async function get_papermc(project,version) {
    let page = await fetch("https://papermc.io/api/v2/projects/"+project+"/versions/"+version);
    let text = await page.text();
    let data = JSON.parse(text);
    let latest = data.builds[data.builds.length-1];
    console.log(latest);
    window.location = "https://papermc.io/api/v2/projects/"+project+"/versions/"+version+"/builds/"+latest+"/downloads/"+project+"-"+version+"-"+latest+".jar"
}

async function get_lastest_ver(project) {
    let page = await fetch("https://papermc.io/api/v2/projects/"+project+"/");
    let text = await page.text();
    let data = JSON.parse(text);
    let latest = data.versions[data.versions.length-1];
    console.log(latest);
    await get_papermc(project,latest);
}