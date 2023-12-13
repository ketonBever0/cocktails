import Image from "next/image";
import nextjsLogo from "@/assets/nextjs_logo.png";


export default function AboutTheSite() {



    return (
        <div>

            <h1 className="text-3xl my-8">Technology</h1>

            <Image className="sm:float-right mx-auto my-8 sm:my-0" src={nextjsLogo} alt="NextJS Logo" width={300} height={200} />

            <div>
                This is a webapp using NextJS, which is a react based web development framework.
                It also has a built-in backend server. I only use it for the feedbacks page.
                They are stored on an <a href="https://www.elephantsql.com/" target="_blank" className="link">online PostgreSQL server</a>.
                The cocktails, filter options, ingredients are fetched from an <a href="https://www.thecocktaildb.com/api.php" target="_blank" className="link">external api</a>.

            </div>

            <h1 className="text-3xl my-8">Inspiration</h1>

            <div>
                At my Software developer Profession studies our teacher showed us this API and he gave us a task about making two filter pages.
                Me and one of my classmates liked this API because of its features, so we made a little more of our homework page.
                Now, that I learned NextJS and my developing skills improved a lot since then, it was perfect for my first portfolio project and I implemented a little backend for testing.
            </div>

        </div>
    )

}