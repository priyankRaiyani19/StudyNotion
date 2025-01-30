import {useEffect} from "react";
import "tailwindcss/tailwind.css";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    useEffect(() => {
        const starsContainer = document.getElementById("stars");
        if (starsContainer) {
            for (let i = 0; i < 100; i++) {
                const star = document.createElement("div");
                star.className = "star absolute bg-white rounded-full";
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.width = `${Math.random() * 3}px`;
                // star.style.height = star.style.width;
                star.style.opacity = "0";
                star.style.animation = `twinkle ${Math.random() * 3 + 1}s ease-in-out infinite`;
                starsContainer.appendChild(star);
            }
        }

        const createMeteor = () => {
            const meteor = document.createElement("div");
            meteor.className = "meteor absolute w-[2px] h-[2px] bg-gradient-to-r from-white to-transparent";
            meteor.style.top = `${Math.random() * 100}%`;
            meteor.style.left = "100%";
            meteor.style.animation = "meteor 2s linear infinite";
            document.body.appendChild(meteor);
            setTimeout(() => meteor.remove(), 2000);
        };

        const meteorInterval = setInterval(createMeteor, 3000);

        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                document.body.style.background = `hsl(${Math.random() * 360}, 50%, 15%)`;
                setTimeout(() => (document.body.style.background = ""), 500);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Cursor glow effect (light blue)
        const cursorGlow = document.createElement("div");
        cursorGlow.id = "cursor-glow";
        cursorGlow.className =
            "fixed w-40 h-40 bg-cyan-400 opacity-40 rounded-full blur-3xl pointer-events-none transition-transform duration-75";
        document.body.appendChild(cursorGlow);

        const moveCursorGlow = (e) => {
            cursorGlow.style.transform = `translate(${e.clientX - 80}px, ${e.clientY - 80}px)`;
        };

        document.addEventListener("mousemove", moveCursorGlow);

        return () => {
            clearInterval(meteorInterval);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousemove", moveCursorGlow);
            document.body.removeChild(cursorGlow);
        };
    }, []);

    return (
        <div className="bg-gray-900 min-h-[100vh] flex items-center justify-center p-4 overflow-hidden relative">
            <div id="stars" className="fixed inset-0"></div>
            <div className="error-container relative z-10 text-center">
                <div className="relative animate-float mb-8">
                    <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
                        <ellipse cx="50" cy="40" rx="30" ry="10" fill="#4F46E5"/>
                        <circle cx="50" cy="35" r="20" fill="#818CF8"/>
                        <ellipse cx="50" cy="30" rx="10" ry="5" fill="#C7D2FE"/>
                        <path className="animate-beam" d="M40 40 L30 80 L70 80 L60 40" fill="rgba(79, 70, 229, 0.2)"/>
                    </svg>
                </div>

                <h1 className="text-8xl font-bold text-white mb-4 animate-float">
                    4<span className="inline-block animate-spin">0</span>4
                </h1>
                <p className="text-xl text-blue-200 mb-8">
                    Oops! Looks like you've wandered into space!
                </p>

                <div className="space-y-4">
                    <div className="flex justify-center space-x-4 mt-8">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition"
                        >
                            GO BACK
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
