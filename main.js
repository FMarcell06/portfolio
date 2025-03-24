const url = `https://raw.githubusercontent.com/FMarcell06/portfolio_json/refs/heads/main/portfolio`

getData(url,renderPortfolio)

function renderPortfolio(data){
    console.log(data);
    users = data

    let topics = []
    data.forEach(obj=>{
        obj.topics.forEach(topic=>{
            if(!topics.includes(topic)){
                topics.push(`<li> ${topic}</li>`)
            }
        })
        console.log(obj);
        document.querySelector('.workHolder').innerHTML+=`
                <div class="workContent">
                    <div class="portfolio">
                        <div class="portfolioImg">
                            <img src="${obj.photo_url}" class="portfolioKep" alt="">
                        </div>
                        <div class="portfolioContent">
                            <div class="portfolioTitle">
                                <h1>${obj.title}</h1>
                            </div>
                            <div class="portfolioTopics">
                                <p>Témakörök:</p>
                                <ul>
                                    ${topics.join('')}
                                    ${topics = []}
                                </ul>
                            </div>
                            <div class="portfolioLinks">
                                <a target="_blank"href="${obj.repo_link}">Github link</a>
                                <a target="_blank" href="${obj.site_link}">Weboldal link</a>
                            </div>
                        </div>
                    </div>
                </div>
        
        `
    })
}