document.addEventListener("DOMContentLoaded", function () {
    //Récupération des éléments
    let generatorCitation = document.querySelector("#generateCitation");
    let btnGenerator = document.querySelector("#btnGenerator");
    let citationRandom ;
    const citationArrays = [
        `Les personnes avec des objectifs réussiront mieux que les autres, parce
        qu'elles savent où elles vont`,
        `Si vous avez accompli tout ce que vous avez prévu pour vous-même, alors
        vous n'avez pas prévu assez`,
        `Si vous n'aimez pas quelque chose, changez-le. Si vous ne pouvez pas le
        changer, changer votre attitude. Ne vous plaignez pas.`,
        `Vous ne pouvez pas vous permettre d'attendre des conditions parfaites
        pour vous lancer. La réalisation de votre ambition est souvent une question
        d'équilibre entre votre temps et vos ressources disponibles. Les opportunités
        sont facilement perdues en attendant des conditions parfaites.`,
        `On ne doit pas craindre l’énergie fournie lors d'une montée car elle sera
        forcément récupérée en descente.`,
        `La prise de décision est une caractéristique de haute performance des
        hommes et des femmes. Presque toute décision vaut mieux que l’absence de
        décision du tout.`,
        `Si un homme fait une erreur dans l’école de la vie et s’il n’en est pas mort,
        il doit s’en réjouir car cette erreur deviendra une nouvelle force pour lui`,
        `Si les gens savaient à quel point j'ai travaillé pour obtenir la maîtrise de
        mon art, cela ne leur semblerait pas si merveilleux.`,
        `Si les gens savaient à quel point j'ai travaillé pour obtenir la maîtrise de
        mon art, cela ne leur semblerait pas si merveilleux.`,
        `Toutes les grandes actions honorables sont accompagnées de grandes
        difficultés.`,
        `J'ai toujours considéré les problèmes comme des occasions en
        vêtements de travail.`
    ];
    function generateCitation() {
            citationRandom = Math.floor(Math.random() * citationArrays.length);
            generatorCitation.innerText = `<<${citationArrays[citationRandom]}>>`

            
    }
    btnGenerator.addEventListener("click",generateCitation);

})