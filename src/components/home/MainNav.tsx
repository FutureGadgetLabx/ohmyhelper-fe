import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {Link} from "react-router-dom";

export const MainNav = () => {
    // 获取当前路由
    const pathname = window.location.pathname
    return (
        <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                    to="/docs"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    首页
                </Link>
                <Link
                    to="/docs/components"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/docs/components")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    教程
                </Link>
                <Link
                    to="/themes"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/themes")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    应用推荐
                </Link>
                <Link
                    to="/examples"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/examples")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    关于
                </Link>
                <Link
                    to={siteConfig.links.github}
                    className={cn(
                        "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                    )}
                >
                    GitHub
                </Link>
            </nav>
        </div>
    )
}
