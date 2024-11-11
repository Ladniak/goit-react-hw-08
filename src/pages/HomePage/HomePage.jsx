import module from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={module.homeDiv}>
            <p className={module.title}>
                Welcome to Your Personal Contacts Hub! Easily manage, search,
                and organize your essential contacts in one secure place.
                Whether for personal or business use, this platform is designed to
                simplify and streamline your connections, making it effortless to stay in touch.
            </p>
        </div>
    )
}

export default HomePage