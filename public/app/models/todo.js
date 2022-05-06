var express = require("express");
const puppeteer = require("puppeteer");




function Todo() {
    function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
    this.crawl = async function (req, res) {
        await console.log(req.body);
        let str = req.body.card;
        let article = [];
        str = encodeURI(str);
        const website = `https://www.cardmarket.com/fr/YuGiOh/Products/Singles?idCategory=5&idExpansion=0&searchString=${str}&idRarity=0&perSite=20`;


        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.goto(`https://www.cardmarket.com/fr/YuGiOh/Products/Singles?idCategory=5&idExpansion=0&searchString=${str}&idRarity=0&perSite=20`);
            try {

                    await delay(200);

                    await page.waitForXPath('//*[@id="CookiesConsent"]/div/div/form/button');
                    let cookie = await page.$x('//*[@id="CookiesConsent"]/div/div/form/button');
                    await cookie[0].click();
                    await console.log("///////////////////");
                    await delay(200);

            } catch (err) {
                console.log(err)
            }


            for (let i = 1; i < 20; i++) {
                try {

                    let [element] = await page.$x(
                        `/html/body/main/section/div[3]/div[2]/div[${i}]/div[4]/div/div[1]/a`
                    );

                    let text3 = await page.evaluate((element) => element.textContent, element);

                    await console.log(text3);

                    await delay(200);
                    let text4 = await page.$x('/html/body/main/section/div[3]/div[2]/div[1]/div[4]/div/div[1]/a');
                    await text4[0].click();
                    await delay(200);
                } catch (error) {
                    console.log(error);
                }
            }

            /*        try {



            let textfiltre = await page.$x('/html/body/main/div[4]/section[4]/a');
            await textfiltre[0].click();


            await delay(200);
            let fr = await page.$x('/html/body/div[3]/div/div/div[2]/form[2]/div[2]/div[3]/div[1]/a');
            await fr[0].click();

            await delay(200);
            let frclick = await page.$x('/html/body/div[3]/div/div/div[2]/form[2]/div[2]/div[3]/div[2]/div/div/div[2]/input');
            await frclick[0].click();

            await delay(200);
            let frclick3 = await page.$x('/html/body/div[3]/div/div/div[2]/form[2]/div[3]/div/input')
            await frclick3[0].click();
        }catch (error){

        }*/

            for (let i = 1; i < 20; i++) {
                try {
                    await delay(200);
                    let [element6] = await page.$x(
                        `/html/body/main/div[4]/section[5]/div/div[2]/div[${i}]/div[3]/div[1]/div/div/span`
                    );
                    let text6 = await page.evaluate((element6) => element6.textContent, element6);

                    await console.log(text6);

                    let [element7] = await page.$x(
                        `/html/body/main/div[3]/div[1]/h1`
                    );
                    let text7 = await page.evaluate((element7) => element7.textContent, element7);


                    await console.log(text7);

                    await article.push({price: text6, nom: text7});





                } catch (e) {
                    console.log(e);

                }
            }
            await browser.close();
            return res.status(200).send(article);
        } catch (err) {
            console.log(err)
           return  res.status(500).send("Something broke");
        }
    }

}

module.exports = new Todo();
