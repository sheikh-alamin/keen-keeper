import Link from "next/link";

const NotFoundPage = () => {
    return (
    <div className="mx-auto text-center py-10 space-y-4">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/"><button className="btn btn-primary">Back to home</button></Link>
    </div>
    );
};

export default NotFoundPage;