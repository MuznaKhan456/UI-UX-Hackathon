// import { request } from "http";
// import { cookies } from "next/headers";
// import { NextRequest,NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) =>{
//     const cookiesStore = await cookies()
//     const isLoggedIn = cookiesStore.get("isloggedIn") 

//     if (isLoggedIn?.value === "0"){
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
//     else if(
//         isLoggedIn?.value === "1" &&
//         request.nextUrl.pathname === "/login"
// ){
//         return NextResponse.redirect(new URL("1",request.url))
//     }
//     return NextResponse.next()
// }
// export const config = {
//     matcher: "/",
// }