const mongoose = require("mongoose");
const Blog = require("./models/blog");

    // Connect MongoDB via mongoose

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Catch error
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

// seedDB function to seed (fill) Database with dummy data

const seedDB = async() => {
    await Blog.deleteMany({});
    let blog;

    blog = new Blog({
        title: `On The Subject Of Code...`,
        image: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80`,
        body: `Fascinating text <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit sordidos, vanos, leves, futtiles? Claudii libidini, qui tum erat summo ne imperio, dederetur. <a>Verum hoc idem saepe faciamus.</a> Duo Reges: constructio interrete. Illa videamus, quae a te de amicitia dicta sunt. Illa videamus, quae a te de amicitia dicta sunt. Illud non continuo, ut aeque incontentae. </p> <p>Nosti, credo, illud: Nemo pius est, qui pietatem-; Sit hoc ultimum bonorum, quod nunc a me defenditur; Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Egone non intellego, quid sit don Graece, Latine voluptas? Utrum igitur tibi litteram videor an totas paginas commovere? Minime vero istorum quidem, inquit. Ac tamen hic mallet non dolere. Verba tu fingas et ea dicas, quae non sentias? </p> <p>Quid adiuvas? Tollenda est atque extrahenda radicitus. Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Quis negat? Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges, Galloni! es homo miser, inquit. Satisne ergo pudori consulat, si quis sine teste libidini pareat? </p>`
    });
    await blog.save();

    blog = new Blog({
        title: `Blinded By Light`,
        image: `https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80`,
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem.`
    });
    await blog.save();

    blog = new Blog({
        title: `Introducing The Next Generation`,
        image: `https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80`,
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas?`
    });
    await blog.save();

    blog = new Blog({
        title: `The Startup Life`,
        image: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80`,
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus necessitatibus officiis voluptas asperiores inventore ea qui at harum perferendis! Nesciunt ad id illum labore vero tenetur error voluptatibus voluptas quae iusto autem facere ratione, saepe similique et dignissimos non fuga quasi quos tempora dolorum, sit commodi reprehenderit! Dolor expedita ut facilis natus corrupti? Similique perspiciatis laboriosam aut deleniti accusantium, cum necessitatibus officia quaerat quod corrupti eligendi provident modi ducimus eos facere exercitationem debitis dolorum dolorem quasi. Ipsa laudantium laboriosam voluptas a blanditiis, delectus soluta beatae, doloremque voluptatum aspernatur voluptate totam incidunt molestias, ipsum ullam illo odit quod animi deserunt veniam vitae. Ipsum, totam. Repellendus, est maiores, magnam in rem reprehenderit iure quibusdam maxime deleniti ullam cumque aspernatur vitae eligendi id assumenda nemo temporibus eius recusandae mollitia unde. Quis ducimus tempore deleniti harum, dolore adipisci quasi similique officia, hic ad assumenda. Voluptatibus sunt soluta quisquam magni nulla maiores possimus cumque! Exercitationem, reiciendis optio numquam in doloribus, repellendus voluptatum nesciunt quaerat ex sit, labore nostrum similique! Impedit delectus aut, inventore consequatur sed ab officia nihil cum in autem provident a repellendus maxime. Quibusdam totam sapiente optio? Excepturi velit tenetur veniam ab aspernatur saepe quo officia eius, qui, animi eaque quam quos aliquid.`
    });
    await blog.save();

    blog = new Blog({
        title: `Savvy Blue Crab`,
        image: `https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Invertebrates/invertebrate_blue-crab_molefranz-GettyImages_600x300.ashx`,
        body: `This crab is actually ridiculously tech savvy. Unfortunately we couldn't get a quote from it, since it's a crab, so this post is very short. Thanks for stopping by!`
    });
    await blog.save();

    blog = new Blog({
        title: `This Laptop will Surprise you`,
        image: `https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80`,
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem quia veritatis quae hic non aspernatur harum cum. Eligendi corporis hic ipsum voluptatibus, fugit autem repellendus perspiciatis sequi quo voluptas?\r\n\r\n`
    });
    await blog.save();

    blog = new Blog({
        title: `The Web Development Experience`,
        image: `https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80`,
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem. Error nihil repellendus voluptatem ut sequi quas exercitationem sunt eaque expedita atque. Aut, enim! Officia, recusandae libero cumque tenetur atque, id aliquam veritatis sed animi praesentium adipisci iste illo consequatur nisi eveniet vitae nobis perferendis quae neque numquam ea possimus. Laudantium, rem.\r\n\r\n`
    });
    await blog.save();

    blog = new Blog({
        title: `Python Today`,
        image: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80`,
        body: `Fascinating text <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit sordidos, vanos, leves, futtiles? Claudii libidini, qui tum erat summo ne imperio, dederetur. <a>Verum hoc idem saepe faciamus.</a> Duo Reges: constructio interrete. Illa videamus, quae a te de amicitia dicta sunt. Illa videamus, quae a te de amicitia dicta sunt. Illud non continuo, ut aeque incontentae. </p> <p>Nosti, credo, illud: Nemo pius est, qui pietatem-; Sit hoc ultimum bonorum, quod nunc a me defenditur; Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Egone non intellego, quid sit don Graece, Latine voluptas? Utrum igitur tibi litteram videor an totas paginas commovere? Minime vero istorum quidem, inquit. Ac tamen hic mallet non dolere. Verba tu fingas et ea dicas, quae non sentias? </p> <p>Quid adiuvas? Tollenda est atque extrahenda radicitus. Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Quis negat? Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges, Galloni! es homo miser, inquit. Satisne ergo pudori consulat, si quis sine teste libidini pareat? </p>\r\n\r\n`
    });
    await blog.save();
}

// Run seedDB, then close Database connection
seedDB().then(() => {
    mongoose.connection.close();
});