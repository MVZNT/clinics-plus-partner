import {useLocation} from "react-router-dom";

const ChatIcon = () => {
    const {pathname} = useLocation()
    const isClicked = pathname === "/chat"

    return isClicked ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.92 8.17799C22.92 4.25784 19.7422 1.07999 15.822 1.07999C13.5475 1.07999 11.5229 2.15267 10.2239 3.81788C15.7643 4.0321 20.19 8.5912 20.19 14.184C20.19 14.3044 20.188 14.4245 20.1839 14.5439L20.5468 14.641C21.602 14.9233 22.5673 13.958 22.2851 12.9027L22.1459 12.3828C22.0335 11.9629 22.1011 11.5193 22.2817 11.1239C22.6916 10.2266 22.92 9.22894 22.92 8.17799Z"
                fill="#008DD2"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M18.5521 14.184C18.5521 19.0088 14.6408 22.92 9.81608 22.92C8.46686 22.92 7.18915 22.6141 6.0484 22.068C5.65636 21.8803 5.21213 21.8144 4.79223 21.9267L3.45341 22.285C2.39809 22.5673 1.43275 21.602 1.71513 20.5468L2.07328 19.2078C2.18573 18.7879 2.1198 18.3437 1.93204 17.9516C1.38595 16.8109 1.08008 15.5332 1.08008 14.184C1.08008 9.35923 4.99131 5.448 9.81608 5.448C14.6408 5.448 18.5521 9.35923 18.5521 14.184ZM5.99408 15.276C6.59718 15.276 7.08608 14.7871 7.08608 14.184C7.08608 13.5809 6.59718 13.092 5.99408 13.092C5.39097 13.092 4.90208 13.5809 4.90208 14.184C4.90208 14.7871 5.39097 15.276 5.99408 15.276ZM9.81608 15.276C10.4192 15.276 10.9081 14.7871 10.9081 14.184C10.9081 13.5809 10.4192 13.092 9.81608 13.092C9.21297 13.092 8.72408 13.5809 8.72408 14.184C8.72408 14.7871 9.21297 15.276 9.81608 15.276ZM13.6381 15.276C14.2412 15.276 14.7301 14.7871 14.7301 14.184C14.7301 13.5809 14.2412 13.092 13.6381 13.092C13.035 13.092 12.5461 13.5809 12.5461 14.184C12.5461 14.7871 13.035 15.276 13.6381 15.276Z"
                  fill="#008DD2"/>
        </svg>
        :
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.1429 21.2857C14.2456 21.2857 17.5715 17.9598 17.5715 13.8571C17.5715 9.75444 14.2456 6.42856 10.1429 6.42856C6.04024 6.42856 2.71436 9.75444 2.71436 13.8571C2.71436 15.0044 2.97443 16.0909 3.43883 17.0609C3.59844 17.3943 3.65449 17.7721 3.55894 18.1291L3.25433 19.2676C3.01424 20.1649 3.83515 20.9858 4.73247 20.7457L5.87093 20.4411C6.228 20.3456 6.60573 20.4016 6.93913 20.5612C7.90916 21.0256 8.99567 21.2857 10.1429 21.2857Z"
                stroke="#878787"/>
            <path
                d="M17.5713 14.3231C17.6331 14.2974 17.6943 14.2706 17.7549 14.243C18.0911 14.0894 18.4684 14.0319 18.8255 14.1275L19.2675 14.2458C20.1648 14.4858 20.9857 13.6649 20.7456 12.7677L20.6273 12.3256C20.5318 11.9685 20.5893 11.5913 20.7429 11.255C21.0914 10.492 21.2856 9.64368 21.2856 8.75001C21.2856 5.41658 18.5834 2.71429 15.2499 2.71429C12.7406 2.71429 10.589 4.2455 9.67847 6.42449"
                stroke="#878787"/>
            <path d="M6.90991 13.8571H6.91827M10.1513 13.8571H10.1597M13.3929 13.8571H13.4013" stroke="#878787"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

}

export default ChatIcon