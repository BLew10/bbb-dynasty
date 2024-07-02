import React from "react";

interface Props {
  textColor: string;
  logoColor: string;
  numbersColor?: string;
}

const EaSports = (
  { textColor, logoColor, numbersColor }: Props = {
    textColor: "white",
    logoColor: "white",
    numbersColor: "white",
  }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="429"
      height="97"
      viewBox="0 0 429 97"
      fill="none"
    >
      <g clipPath="url(#clip0_67_11352)">
        <g clipPath="url(#clip1_67_11352)">
          <g clipPath="url(#clip2_67_11352)">
            <path
              d="M33.5022 58.0035H30.3428V62.0668H33.5022C33.7703 62.0668 33.9982 61.964 34.1681 61.7628C34.3423 61.5572 34.4317 61.3024 34.4317 60.9895V59.0763C34.4317 58.7545 34.3423 58.5086 34.1681 58.303C33.9982 58.0974 33.7659 57.999 33.5022 57.999V58.0035Z"
              fill={logoColor}
            />
            <path
              d="M44.6071 58.0034H42.3861C42.0956 58.0034 41.8767 58.1018 41.7024 58.3074C41.5326 58.513 41.4521 58.7678 41.4521 59.0807V65.7992C41.4521 66.1031 41.5326 66.3579 41.7024 66.5636C41.8767 66.7737 42.1001 66.8854 42.3861 66.8854H44.6071C44.8752 66.8854 45.0986 66.7737 45.2684 66.5636C45.4517 66.3579 45.5366 66.1031 45.5366 65.7992V59.0807C45.5366 58.7723 45.4472 58.513 45.2684 58.3074C45.0986 58.1018 44.8752 58.0034 44.6071 58.0034Z"
              fill={logoColor}
            />
            <path
              d="M56.0158 58.0034H52.9815V61.7538H56.0158C56.2839 61.7538 56.5073 61.6554 56.6727 61.4632C56.8425 61.2621 56.9229 61.0073 56.9229 60.6944V59.0852C56.9229 58.7767 56.8425 58.5175 56.6727 58.3119C56.5029 58.1062 56.2794 58.0079 56.0158 58.0079V58.0034Z"
              fill={logoColor}
            />
            <path
              d="M48.4993 0C21.7137 0 0 21.72 0 48.5134C0 75.3069 21.7137 97.0268 48.4993 97.0268C75.285 97.0268 96.9987 75.3069 96.9987 48.5134C96.9987 21.72 75.285 0 48.4993 0ZM30.3741 22.4486H55.3053L51.4845 28.501L26.5622 28.5144L30.3741 22.4486ZM25.3155 66.1969C25.3155 66.9747 25.0473 67.6318 24.5156 68.1682C23.9748 68.7135 23.309 68.9862 22.5493 68.9862H19.2603C18.4827 68.9862 17.8258 68.7225 17.303 68.204C16.7802 67.6854 16.521 67.0373 16.521 66.2461V64.9453H18.5408L18.8403 66.1522C18.9743 66.6484 19.3184 66.9076 19.877 66.9076H22.1024C22.375 66.9076 22.6029 66.8093 22.7817 66.5992C22.947 66.3981 23.0319 66.1343 23.0319 65.8348V64.4C23.0319 63.6982 22.7236 63.3405 22.1024 63.3405H19.3095C18.5453 63.3405 17.8795 63.0768 17.3298 62.527C16.798 61.9817 16.5254 61.3246 16.5254 60.5512V58.6604C16.5254 57.905 16.798 57.2523 17.3298 56.7115C17.8839 56.1661 18.5453 55.8979 19.3095 55.8979H22.5538C23.3135 55.8979 23.9659 56.1617 24.5022 56.6757C25.0295 57.1987 25.2887 57.8424 25.2887 58.6291V59.8047H23.2822L22.9783 58.7364C22.8219 58.2268 22.4689 57.981 21.955 57.981H19.7608C19.4748 57.981 19.2514 58.0793 19.0816 58.2894C18.8983 58.495 18.8224 58.7498 18.8224 59.0672V60.1713C18.8224 60.8597 19.1307 61.2039 19.7608 61.2039H22.5538C23.309 61.2039 23.9614 61.4765 24.5066 62.0308C25.0518 62.5806 25.3199 63.2333 25.3199 63.9887V66.2058L25.3155 66.1969ZM36.7465 61.4006C36.7465 62.1694 36.4739 62.8265 35.9332 63.3674C35.3791 63.9082 34.7177 64.1809 33.9491 64.1809H30.3428V68.9907H28.0325V55.889H33.958C34.7222 55.889 35.388 56.1572 35.9422 56.7025C36.4784 57.2345 36.7555 57.8916 36.7555 58.647V61.4006H36.7465ZM47.8514 66.179C47.8514 66.9747 47.5877 67.6363 47.0291 68.1727C46.4839 68.718 45.836 68.9907 45.0584 68.9907H41.9303C41.1527 68.9907 40.4913 68.718 39.9462 68.1727C39.401 67.6363 39.1284 66.9747 39.1284 66.179V58.647C39.1284 57.896 39.4054 57.2389 39.9462 56.7025C40.4913 56.1572 41.1527 55.889 41.9303 55.889H45.0584C45.836 55.889 46.4839 56.1572 47.0291 56.6936C47.5832 57.2211 47.8514 57.8871 47.8514 58.647V66.179ZM48.4278 52.7689H16.8517L24.529 40.6417H18.8939L22.7281 34.5758H46.2069L42.3682 40.6417H31.8398L27.952 46.712H44.902L60.3996 22.2385L79.6912 52.7689H72.4116L68.5819 46.7075H57.1777L61.0118 40.6282H64.7477L60.3996 33.7354L48.4234 52.7644L48.4278 52.7689ZM57.3251 68.9907L55.1891 63.8591H52.9904V68.9907H50.6712V55.889H56.4627C57.2402 55.889 57.8971 56.1572 58.4334 56.7025C58.9741 57.2345 59.2467 57.896 59.2467 58.647V60.9357C59.2467 61.5257 59.0813 62.0711 58.7551 62.5493C58.4155 63.0187 57.9865 63.354 57.4815 63.5775L59.7785 68.9907H57.3162H57.3251ZM69.717 58.0078H66.3565V68.9952H64.0372V58.0078H60.7035V55.8935H69.7125V58.0078H69.717ZM80.223 66.1969C80.223 66.9747 79.9549 67.6318 79.4142 68.1682C78.869 68.7135 78.2076 68.9862 77.43 68.9862H74.15C73.3679 68.9862 72.72 68.7225 72.1927 68.204C71.6743 67.681 71.4062 67.0373 71.4062 66.2461V64.9453H73.4216L73.7254 66.1522C73.8684 66.6484 74.2081 66.9076 74.7622 66.9076H76.9832C77.2647 66.9076 77.4926 66.8093 77.6669 66.5992C77.8322 66.3981 77.9171 66.1343 77.9171 65.8348V64.4C77.9171 63.6982 77.6088 63.3405 76.9876 63.3405H74.1991C73.4305 63.3405 72.7647 63.0768 72.2284 62.527C71.6922 61.9817 71.4106 61.3246 71.4106 60.5512V58.6604C71.4106 57.905 71.6922 57.2523 72.2284 56.7115C72.7602 56.1661 73.426 55.8979 74.1991 55.8979H77.4345C78.2121 55.8979 78.8556 56.1617 79.3918 56.6757C79.9147 57.1987 80.1828 57.8424 80.1828 58.6291V59.8047H78.1674L77.8635 58.7364C77.7026 58.2268 77.3541 57.981 76.8402 57.981H74.6415C74.3645 57.981 74.1276 58.0793 73.9623 58.2894C73.7925 58.495 73.7076 58.7498 73.7076 59.0672V60.1713C73.7076 60.8597 74.0248 61.2039 74.6415 61.2039H77.43C78.1942 61.2039 78.8511 61.4765 79.3873 62.0308C79.9504 62.5806 80.223 63.2333 80.223 63.9887V66.2058V66.1969ZM81.6396 56.5416H81.148V57.5921H80.8978V56.5416H80.4062V56.327H81.6396V56.5416ZM83.1143 57.5876V56.8053C83.1143 56.7696 83.1143 56.7294 83.1188 56.6668C83.0964 56.7204 83.0875 56.7651 83.0562 56.8053L82.654 57.4267H82.6138L82.1982 56.7964C82.1758 56.7651 82.1446 56.7115 82.1222 56.6712C82.1222 56.7249 82.149 56.7651 82.149 56.8098V57.5921H81.9345V56.3226H82.149L82.6451 57.087L83.1411 56.3226H83.3332V57.5921H83.1053L83.1143 57.5876Z"
              fill={logoColor}
            />
            <path
              d="M257.297 38.7326V30.0473C257.297 29.8685 257.15 29.7254 256.975 29.7254H239.775C239.597 29.7254 239.454 29.5779 239.454 29.4036V26.0064C239.454 25.8276 239.601 25.6845 239.775 25.6845H256.975C257.154 25.6845 257.297 25.537 257.297 25.3627V17.786C257.297 17.6072 257.15 17.4641 256.975 17.4641H239.775C239.597 17.4641 239.454 17.3166 239.454 17.1423V13.7361C239.454 13.5573 239.601 13.4142 239.775 13.4142H256.975C257.154 13.4142 257.297 13.2667 257.297 13.0924V4.38923C257.297 4.21042 257.15 4.06738 256.975 4.06738H230.083C229.904 4.06738 229.761 4.21489 229.761 4.38923V38.7371C229.761 38.9159 229.908 39.0589 230.083 39.0589H256.975C257.154 39.0589 257.297 38.9114 257.297 38.7371V38.7326Z"
              fill={textColor}
            />
            <path
              d="M295.456 4.38476V38.7326C295.456 38.9114 295.603 39.0544 295.778 39.0544H322.671C322.849 39.0544 322.992 38.9069 322.992 38.7326V30.0473C322.992 29.8685 322.845 29.7254 322.671 29.7254H305.47C305.292 29.7254 305.149 29.5779 305.149 29.4036V26.0064C305.149 25.8276 305.296 25.6845 305.47 25.6845H322.671C322.849 25.6845 322.992 25.537 322.992 25.3627V17.786C322.992 17.6072 322.845 17.4641 322.671 17.4641H305.47C305.292 17.4641 305.149 17.3166 305.149 17.1423V13.7361C305.149 13.5573 305.296 13.4142 305.47 13.4142H322.671C322.849 13.4142 322.992 13.2667 322.992 13.0924V4.38923C322.992 4.21042 322.845 4.06738 322.671 4.06738H295.778C295.599 4.06738 295.456 4.21489 295.456 4.38923V4.38476Z"
              fill={textColor}
            />
            <path
              d="M107.192 92.9633H116.147C116.326 92.9633 116.469 92.8158 116.469 92.6415V70.5326C116.469 70.3538 116.617 70.2108 116.791 70.2108H130.434C130.613 70.2108 130.756 70.0633 130.756 69.8889V61.1947C130.756 61.0159 130.608 60.8728 130.434 60.8728H116.791C116.612 60.8728 116.469 60.7253 116.469 60.551V51.5573C116.469 51.3785 116.617 51.2354 116.791 51.2354H130.434C130.613 51.2354 130.756 51.0879 130.756 50.9136V42.1299C130.756 41.9511 130.608 41.8081 130.434 41.8081H107.187C107.009 41.8081 106.866 41.9556 106.866 42.1299V92.6459C106.866 92.8247 107.013 92.9678 107.187 92.9678L107.192 92.9633Z"
              fill={textColor}
            />
            <path
              d="M200.62 38.7332V30.0479C200.62 29.8691 200.473 29.726 200.298 29.726H186.682C186.503 29.726 186.36 29.5785 186.36 29.4042V4.38532C186.36 4.20652 186.213 4.06348 186.039 4.06348H176.998C176.819 4.06348 176.676 4.21099 176.676 4.38532V38.7287C176.676 38.9075 176.824 39.0505 176.998 39.0505H200.303C200.482 39.0505 200.625 38.903 200.625 38.7287L200.62 38.7332Z"
              fill={textColor}
            />
            <path
              d="M227.142 38.7332V30.0479C227.142 29.8691 226.995 29.726 226.82 29.726H213.204C213.025 29.726 212.882 29.5785 212.882 29.4042V4.38532C212.882 4.20652 212.735 4.06348 212.561 4.06348H203.52C203.342 4.06348 203.199 4.21099 203.199 4.38532V38.7287C203.199 38.9075 203.346 39.0505 203.52 39.0505H226.825C227.004 39.0505 227.147 38.903 227.147 38.7287L227.142 38.7332Z"
              fill={textColor}
            />
            <path
              d="M167.663 38.9337L173.955 31.0665C174 31.0084 174.027 30.9368 174.027 30.8653V12.2789C174.027 12.1895 173.991 12.109 173.933 12.0509L166.045 4.16125C165.983 4.09867 165.902 4.06738 165.817 4.06738H149.98C149.891 4.06738 149.81 4.10314 149.752 4.16125L141.865 12.0509C141.802 12.1135 141.771 12.1939 141.771 12.2789V30.8653C141.771 30.9413 141.798 31.0128 141.843 31.0665L148.135 38.9337C148.197 39.0097 148.291 39.0544 148.385 39.0544H167.408C167.507 39.0544 167.6 39.0097 167.659 38.9337H167.663ZM151.468 14.6346L152.608 13.4947C152.67 13.4321 152.751 13.4008 152.836 13.4008H162.962C163.047 13.4008 163.132 13.4366 163.19 13.4947L164.329 14.6346C164.392 14.6972 164.423 14.7776 164.423 14.8625V28.0045C164.423 28.0805 164.396 28.152 164.347 28.2101L163.19 29.6048C163.127 29.6807 163.038 29.721 162.94 29.721H152.849C152.751 29.721 152.661 29.6807 152.599 29.6048L151.441 28.2101C151.392 28.152 151.366 28.076 151.366 28.0045V14.8625C151.366 14.7776 151.401 14.6927 151.459 14.6346H151.468Z"
              fill={textColor}
            />
            <path
              d="M194.158 51.231H200.701C200.879 51.231 201.022 51.374 201.022 51.5528V92.6415C201.022 92.8203 201.17 92.9633 201.344 92.9633H210.299C210.478 92.9633 210.621 92.8158 210.621 92.6415V51.5573C210.621 51.3785 210.769 51.2354 210.943 51.2354H216.913C217.092 51.2354 217.235 51.0879 217.235 50.9136V42.1299C217.235 41.9511 217.087 41.8081 216.913 41.8081H194.154C193.975 41.8081 193.832 41.9556 193.832 42.1299V50.9136C193.832 51.0924 193.98 51.2354 194.154 51.2354L194.158 51.231Z"
              fill={textColor}
            />
            <path
              d="M287.497 41.7993H278.542C278.363 41.7993 278.22 41.9468 278.22 42.1212V92.6371C278.22 92.816 278.367 92.959 278.542 92.959H299.187C299.366 92.959 299.509 92.8115 299.509 92.6371V83.8535C299.509 83.6747 299.362 83.5317 299.187 83.5317H288.145C287.966 83.5317 287.823 83.3841 287.823 83.2098V42.1256C287.823 41.9468 287.676 41.8038 287.502 41.8038L287.497 41.7993Z"
              fill={textColor}
            />
            <path
              d="M311.025 41.7993H302.07C301.891 41.7993 301.748 41.9468 301.748 42.1212V92.6371C301.748 92.816 301.895 92.959 302.07 92.959L322.72 92.9501C322.898 92.9501 323.041 92.8025 323.041 92.6282V83.8446C323.041 83.6658 322.894 83.5227 322.72 83.5227L311.673 83.5317C311.494 83.5317 311.351 83.3841 311.351 83.2098V42.1256C311.351 41.9468 311.204 41.8038 311.029 41.8038L311.025 41.7993Z"
              fill={textColor}
            />
            <path
              d="M170.867 41.8932L163.95 48.8128C163.887 48.8754 163.856 48.9559 163.856 49.0408V86.3567C163.856 86.4461 163.896 86.5355 163.963 86.5981L170.867 92.8785C170.925 92.9322 171.001 92.9635 171.082 92.9635H184.707C184.787 92.9635 184.863 92.9322 184.921 92.8785L191.826 86.5981C191.893 86.5355 191.933 86.4506 191.933 86.3567V49.0408C191.933 48.9514 191.897 48.8709 191.839 48.8128L184.921 41.8932C184.859 41.8306 184.778 41.7993 184.693 41.7993H171.086C170.997 41.7993 170.916 41.8351 170.858 41.8932H170.867ZM182.285 82.6242L181.471 83.4378C181.409 83.5004 181.328 83.5317 181.244 83.5317H174.545C174.456 83.5317 174.375 83.4959 174.317 83.4378L173.504 82.6242C173.441 82.5617 173.41 82.4812 173.41 82.3963V52.3665C173.41 52.2816 173.441 52.1966 173.504 52.1385L174.317 51.325C174.38 51.2624 174.46 51.2311 174.545 51.2311H181.244C181.333 51.2311 181.413 51.2669 181.471 51.325L182.285 52.1385C182.347 52.2011 182.379 52.2816 182.379 52.3665V82.4007C182.379 82.4901 182.343 82.5706 182.285 82.6287V82.6242Z"
              fill={textColor}
            />
            <path
              d="M140.162 41.8932L133.245 48.8128C133.182 48.8754 133.151 48.9559 133.151 49.0408V86.3567C133.151 86.4461 133.191 86.5355 133.258 86.5981L140.162 92.8785C140.22 92.9322 140.296 92.9635 140.377 92.9635H154.002C154.083 92.9635 154.158 92.9322 154.217 92.8785L161.121 86.5981C161.188 86.5355 161.228 86.4506 161.228 86.3567V49.0408C161.228 48.9514 161.192 48.8709 161.134 48.8128L154.217 41.8932C154.154 41.8306 154.074 41.7993 153.989 41.7993H140.381C140.292 41.7993 140.212 41.8351 140.153 41.8932H140.162ZM151.58 82.6242L150.767 83.4378C150.704 83.5004 150.624 83.5317 150.539 83.5317H143.84C143.751 83.5317 143.67 83.4959 143.612 83.4378L142.799 82.6242C142.736 82.5617 142.705 82.4812 142.705 82.3963V52.3665C142.705 52.2816 142.736 52.1966 142.799 52.1385L143.612 51.325C143.675 51.2624 143.755 51.2311 143.84 51.2311H150.539C150.628 51.2311 150.709 51.2669 150.767 51.325L151.58 52.1385C151.643 52.2011 151.674 52.2816 151.674 52.3665V82.4007C151.674 82.4901 151.638 82.5706 151.58 82.6287V82.6242Z"
              fill={textColor}
            />
            <path
              d="M219.563 42.1256V92.6416C219.563 92.8204 219.711 92.9635 219.885 92.9635H239.923C240.012 92.9635 240.093 92.9277 240.155 92.8651L247.077 85.6281C247.135 85.5655 247.167 85.4895 247.167 85.4046V70.1349C247.167 70.05 247.135 69.974 247.077 69.9114L242.988 65.5934V65.3296L247.086 60.6316C247.14 60.5735 247.167 60.4975 247.167 60.4171V49.3582C247.167 49.2732 247.135 49.1928 247.077 49.1347L240.16 41.8977C240.097 41.8351 240.012 41.7993 239.927 41.7993H219.889C219.711 41.7993 219.568 41.9468 219.568 42.1212H219.563V42.1256ZM237.474 82.3739L236.406 83.4423C236.343 83.5048 236.263 83.5361 236.178 83.5361H229.488C229.309 83.5361 229.166 83.3886 229.166 83.2143V70.3808C229.166 70.202 229.314 70.0589 229.488 70.0589H236.173C236.263 70.0589 236.343 70.0947 236.401 70.1528L237.469 71.2212C237.532 71.2837 237.563 71.3642 237.563 71.4491V82.1504C237.563 82.2398 237.527 82.3203 237.469 82.3784L237.474 82.3739ZM237.474 59.8181L236.406 60.8864C236.343 60.949 236.263 60.9803 236.178 60.9803H229.493C229.314 60.9803 229.171 60.8328 229.171 60.6584V51.5619C229.171 51.3831 229.318 51.2401 229.493 51.2401H236.173C236.258 51.2401 236.343 51.2713 236.401 51.3339L237.478 52.4023C237.541 52.4648 237.577 52.5453 237.577 52.6302V59.5946C237.577 59.684 237.541 59.7644 237.483 59.8225L237.474 59.8181Z"
              fill={textColor}
            />
            <path
              d="M254.83 42.063L249.598 73.9211C249.598 73.9211 249.593 73.9613 249.593 73.9792V92.6416C249.593 92.8204 249.741 92.9635 249.915 92.9635H258.87C259.049 92.9635 259.192 92.816 259.192 92.6416V83.9563C259.192 83.7775 259.339 83.6345 259.514 83.6345H265.649C265.828 83.6345 265.971 83.782 265.971 83.9563V92.6416C265.971 92.8204 266.119 92.9635 266.293 92.9635H275.248C275.427 92.9635 275.57 92.816 275.57 92.6416V73.9792C275.57 73.9792 275.57 73.9389 275.565 73.9211L270.221 42.063C270.19 41.9111 270.06 41.7993 269.904 41.7993H255.139C254.982 41.7993 254.853 41.9111 254.822 42.063H254.83ZM265.654 74.6497H259.518C259.339 74.6497 259.196 74.5022 259.196 74.3278V73.4428L262.208 50.7841C262.222 50.7081 262.289 50.65 262.365 50.65H262.816C262.897 50.65 262.964 50.7081 262.973 50.7841L265.984 73.4428V74.3278C265.984 74.5066 265.837 74.6497 265.663 74.6497H265.654Z"
              fill={textColor}
            />
            <path
              d="M138.795 23.7535H129.84C129.661 23.7535 129.518 23.901 129.518 24.0753V28.0045C129.518 28.0805 129.491 28.152 129.442 28.2101L128.284 29.6048C128.222 29.6807 128.132 29.721 128.034 29.721H117.944C117.845 29.721 117.756 29.6807 117.693 29.6048L116.536 28.2101C116.487 28.152 116.46 28.076 116.46 28.0045V14.8625C116.46 14.7776 116.496 14.6927 116.554 14.6346L117.693 13.4947C117.756 13.4321 117.836 13.4008 117.921 13.4008H128.048C128.132 13.4008 128.217 13.4366 128.275 13.4947L129.415 14.6346C129.478 14.6972 129.509 14.7776 129.509 14.8625V19.0689C129.509 19.2477 129.656 19.3907 129.831 19.3907H138.786C138.965 19.3907 139.108 19.2432 139.108 19.0689V12.2789C139.108 12.1895 139.072 12.109 139.014 12.0509L131.127 4.16125C131.064 4.09867 130.984 4.06738 130.899 4.06738H115.061C114.972 4.06738 114.892 4.10314 114.833 4.16125L106.946 12.0509C106.884 12.1135 106.852 12.1939 106.852 12.2789V30.8653C106.852 30.9413 106.879 31.0128 106.924 31.0665L113.216 38.9337C113.278 39.0097 113.372 39.0544 113.466 39.0544H132.49C132.588 39.0544 132.682 39.0097 132.74 38.9337L139.032 31.0665C139.076 31.0084 139.103 30.9368 139.103 30.8653V24.0753C139.103 23.8965 138.956 23.7535 138.782 23.7535H138.795Z"
              fill={textColor}
            />
            <path
              d="M279.628 38.9337L282.818 34.8034C282.912 34.6827 283.109 34.7498 283.109 34.9018V38.7281C283.109 38.9069 283.256 39.05 283.43 39.05H292.395C292.574 39.05 292.717 38.9025 292.717 38.7281V24.2318V18.7381C292.717 18.5593 292.569 18.4162 292.395 18.4162H273.532C273.353 18.4162 273.21 18.5637 273.21 18.7381V25.832C273.21 26.0108 273.358 26.1539 273.532 26.1539H282.787C282.966 26.1539 283.109 26.3014 283.109 26.4757V28.0045C283.109 28.0805 283.082 28.152 283.033 28.2101L281.884 29.5958C281.822 29.6718 281.732 29.712 281.634 29.712H271.119C271.021 29.712 270.931 29.6673 270.869 29.5958L269.711 28.2056C269.662 28.1475 269.635 28.0715 269.635 28V14.8581C269.635 14.7731 269.671 14.6882 269.729 14.6301L270.869 13.4902C270.927 13.4321 271.012 13.3964 271.097 13.3964H281.652C281.737 13.3964 281.822 13.4321 281.88 13.4902L283.019 14.6301C283.077 14.6882 283.113 14.7731 283.113 14.8581V15.6984C283.113 15.8772 283.261 16.0203 283.435 16.0203H292.39C292.569 16.0203 292.712 15.8728 292.712 15.6984V12.2789C292.712 12.1895 292.676 12.109 292.618 12.0509L284.731 4.16125C284.673 4.10314 284.588 4.06738 284.503 4.06738H268.237C268.147 4.06738 268.067 4.10314 268.009 4.16125L260.121 12.0509C260.063 12.109 260.028 12.1939 260.028 12.2789V30.8698C260.028 30.9458 260.054 31.0173 260.099 31.0709L266.391 38.9382C266.454 39.0142 266.548 39.0589 266.641 39.0589H279.364C279.462 39.0589 279.556 39.0142 279.614 38.9382L279.628 38.9337Z"
              fill={textColor}
            />
            <path
              d="M336.72 4.24201L326.889 17.3616C326.849 17.4152 326.826 17.4823 326.826 17.5538V38.7239C326.826 38.9027 326.974 39.0458 327.148 39.0458H343.245C343.423 39.0458 343.566 38.8983 343.566 38.7239V23.1458C343.566 23.0564 343.602 22.976 343.66 22.9179L346.073 20.513C346.136 20.4504 346.216 20.4191 346.301 20.4191H356.95C357.035 20.4191 357.12 20.4504 357.178 20.513L359.591 22.9179C359.654 22.9804 359.685 23.0609 359.685 23.1458V32.1127C359.685 32.2021 359.645 32.2916 359.578 32.3541L326.929 60.1623C326.862 60.2249 326.822 60.3098 326.822 60.4037V92.6372C326.822 92.816 326.97 92.959 327.144 92.959H376.103C376.282 92.959 376.425 92.8115 376.425 92.6372V61.1949C376.425 61.0161 376.278 60.873 376.103 60.873H360.007C359.828 60.873 359.685 61.0205 359.685 61.1949V76.3304C359.685 76.5092 359.538 76.6523 359.363 76.6523H343.893C343.714 76.6523 343.571 76.5048 343.571 76.3304V68.3514C343.571 68.262 343.611 68.1726 343.678 68.11L376.331 39.8906C376.398 39.828 376.439 39.7431 376.439 39.6492V17.5493C376.439 17.4778 376.416 17.4108 376.376 17.3571L366.545 4.23754C366.482 4.15708 366.388 4.10791 366.286 4.10791H336.984C336.886 4.10791 336.787 4.15708 336.725 4.23754H336.72V4.24201Z"
              fill={numbersColor}
            />
            <path
              d="M419.196 32.4618C419.133 32.3992 419.053 32.3679 418.968 32.3679H396.619C396.441 32.3679 396.298 32.2204 396.298 32.046V20.7458C396.298 20.567 396.445 20.4239 396.619 20.4239H428.678C428.857 20.4239 429 20.2764 429 20.1021V4.43903C429 4.26023 428.853 4.11719 428.678 4.11719H379.719C379.54 4.11719 379.397 4.2647 379.397 4.43903V48.3528C379.397 48.5316 379.544 48.6746 379.719 48.6746H409.534C409.619 48.6746 409.704 48.7059 409.762 48.7685L412.166 51.16C412.229 51.2225 412.26 51.303 412.26 51.3879V73.9259C412.26 74.0153 412.224 74.0958 412.166 74.1539L409.762 76.5543C409.699 76.6169 409.619 76.6482 409.534 76.6482H398.863C398.778 76.6482 398.693 76.6124 398.635 76.5543L396.231 74.1539C396.168 74.0913 396.137 74.0108 396.137 73.9259V61.1907C396.137 61.0119 395.989 60.8689 395.815 60.8689H379.719C379.54 60.8689 379.397 61.0164 379.397 61.1907V82.9196C379.397 83.009 379.433 83.0895 379.491 83.1476L389.201 92.861C389.264 92.9236 389.344 92.9549 389.429 92.9549H418.977C419.066 92.9549 419.146 92.9191 419.205 92.861L428.915 83.1476C428.978 83.085 429.009 83.0046 429.009 82.9196V42.3942C429.009 42.3048 428.973 42.2243 428.915 42.1662L419.205 32.4528L419.196 32.4618Z"
              fill={numbersColor}
            />
            <path
              d="M319.145 41.8082H320.785V42.0943H320.132V43.4889H319.802V42.0943H319.149V41.8082H319.145ZM322.782 41.8082L322.121 42.8229L321.46 41.8082H321.178V43.4889H321.46V42.4519C321.46 42.3938 321.424 42.3356 321.424 42.2686C321.46 42.3222 321.495 42.3938 321.527 42.434L322.076 43.2699H322.13L322.666 42.4474C322.711 42.3938 322.72 42.3312 322.747 42.2641C322.738 42.3491 322.738 42.4027 322.738 42.4474V43.4844H323.041V41.8037H322.778L322.782 41.8082Z"
              fill={textColor}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_67_11352">
          <rect width="429" height="97" fill="white" />
        </clipPath>
        <clipPath id="clip1_67_11352">
          <rect width="429" height="97" fill="white" />
        </clipPath>
        <clipPath id="clip2_67_11352">
          <rect width="429" height="97.0268" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EaSports;