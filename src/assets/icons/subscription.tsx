import {useLocation} from "react-router-dom";

const SubscriptionIcon = () => {
    const {pathname} = useLocation()
    const isClicked = ["/subscriptions", "/transactions"].includes(pathname);

    return isClicked ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.50069 3.18507H13.7107C17.6801 3.18507 19.6648 3.18507 20.8979 4.41812C21.7858 5.30602 22.0344 6.58346 22.104 8.71082H1.10742C1.17706 6.58346 1.42564 5.30602 2.31354 4.41812C3.54659 3.18507 5.53132 3.18507 9.50069 3.18507Z"
                fill="#008DD2"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M22.1301 12.4658L21.7002 12.0357C20.7754 11.1109 19.2759 11.1109 18.351 12.0357L17.5075 12.8793C17.171 11.9813 16.3047 11.3422 15.2893 11.3422C13.9814 11.3422 12.921 12.4024 12.921 13.7103V15.5668C12.4054 15.6242 11.9051 15.8506 11.5096 16.2459C10.5847 17.1707 10.5847 18.6702 11.5096 19.5951L11.9401 20.0255H9.50036C5.531 20.0255 3.54627 20.0255 2.31322 18.7924C1.08008 17.5594 1.08008 15.5746 1.08008 11.6053C1.08008 11.1401 1.08008 10.7022 1.08203 10.2897H22.1287C22.1307 10.7022 22.1307 11.1401 22.1307 11.6053C22.1307 11.9031 22.1307 12.1898 22.1301 12.4658ZM5.29022 15.026C4.85426 15.026 4.50084 15.3794 4.50084 15.8154C4.50084 16.2514 4.85426 16.6048 5.29022 16.6048H9.50036C9.93624 16.6048 10.2897 16.2514 10.2897 15.8154C10.2897 15.3794 9.93624 15.026 9.50036 15.026H5.29022Z"
                  fill="#008DD2"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M15.289 12.921C15.7249 12.921 16.0784 13.2744 16.0784 13.7103V18.1198L16.8359 17.3623C17.1442 17.054 17.6439 17.054 17.9522 17.3623C18.2605 17.6706 18.2605 18.1704 17.9522 18.4786L15.8471 20.5837C15.5389 20.892 15.0391 20.892 14.7308 20.5837L12.6257 18.4786C12.3175 18.1704 12.3175 17.6706 12.6257 17.3623C12.934 17.054 13.4338 17.054 13.7421 17.3623L14.4996 18.1198V13.7103C14.4996 13.2744 14.853 12.921 15.289 12.921ZM19.4672 13.1522C19.7755 12.8439 20.2752 12.8439 20.5835 13.1522L22.6886 15.2572C22.9969 15.5655 22.9969 16.0653 22.6886 16.3736C22.3803 16.6819 21.8805 16.6819 21.5723 16.3736L20.8147 15.6162V20.0256C20.8147 20.4615 20.4613 20.8149 20.0253 20.8149C19.5894 20.8149 19.236 20.4615 19.236 20.0256V15.6162L18.4784 16.3736C18.1702 16.6819 17.6704 16.6819 17.3621 16.3736C17.0538 16.0653 17.0538 15.5655 17.3621 15.2572L19.4672 13.1522Z"
                  fill="#008DD2"/>
        </svg>
        :
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.1571 10.9841C22.1479 7.8206 22.0478 6.14351 20.968 5.06358C19.7779 3.87352 17.8623 3.87352 14.0315 3.87352H9.96828C6.13737 3.87352 4.222 3.87352 3.03185 5.06358C1.8418 6.25373 1.8418 8.16909 1.8418 12C1.8418 15.8308 1.8418 17.7464 3.03185 18.9363C4.222 20.1265 6.13737 20.1265 9.96828 20.1265H11.492"
                stroke="#878787" strokeLinecap="round"/>
            <path
                d="M15.5555 14.0316V20.1265M15.5555 20.1265L17.5872 18.0949M15.5555 20.1265L13.5239 18.0949M20.1267 20.1265V14.0316M20.1267 14.0316L22.1583 16.0632M20.1267 14.0316L18.0951 16.0632"
                stroke="#878787" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.96852 16.0632H5.90527" stroke="#878787" strokeLinecap="round"/>
            <path d="M1.8418 9.96838H22.158" stroke="#878787" strokeLinecap="round"/>
        </svg>
}

export default SubscriptionIcon