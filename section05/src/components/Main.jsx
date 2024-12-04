import "./Main.css"

const Main = () => {
    const user = {
        name: "농담곰",
        isLogin: true,
    };

    if(user.isLogin) {
        return <div className="login">로그인</div>
    } else {
        return <div>로그아웃</div>
    }

    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그아웃</div>
    //         )}
    //     </>
    // )
}

export default Main;