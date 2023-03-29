import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';

const ProfilePage = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.profile}>
          <SvgXml xml={profile} style={styles.icon2} />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>inthemoment@gmail.com</Text>
        </LinearGradient>
      </View>
      <View style={styles.middleView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.item}>
            <SvgXml xml={home} width={78} height={78} />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.item}>
            <SvgXml xml={settings} />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.item}>
          <SvgXml xml={info} />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.item}>
            <SvgXml xml={friends} width={60} height={60} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.item}>
          <SvgXml xml={comments} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient colors={['#8CBBF1', '#FF9BC3']} style={styles.item}>
          <SvgXml xml={dark_mode} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <LinearGradient style={styles.Button} colors={['#F97794', '#A771FF']}>
          <Button
            color={'white'}
            title={`SIGN OUT`}
            onPress={() => {
              navigation.navigate('signUp');
            }}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
  topView: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleView: {
    width: '100%',
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 350,
    height: 310,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 70,
    alignItems: 'center',
  },
  item: {
    width: 90,
    height: 90,
    borderRadius: 25,
    margin: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: '70%',
    borderRadius: 17,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 6,
  },
  name: {
    fontSize: 50,
    color: 'white',
    marginTop: 20,
  },
  email: {
    fontSize: 20,
    color: 'white',
    marginTop: 15,
  },
  icon2: {
    marginTop: 30,
  },
});

const profile = `<svg width="135" height="132" viewBox="0 0 135 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 115.5C95.4591 115.5 118.125 93.3378 118.125 66C118.125 38.6623 95.4591 16.5 67.5 16.5C39.5409 16.5 16.875 38.6623 16.875 66C16.875 93.3378 39.5409 115.5 67.5 115.5ZM67.5 121C98.5669 121 123.75 96.3765 123.75 66C123.75 35.6235 98.5669 11 67.5 11C36.4331 11 11.25 35.6235 11.25 66C11.25 96.3765 36.4331 121 67.5 121Z" fill="white"/>
<path d="M33.75 97.9825C33.75 95.1417 35.9213 92.741 38.8125 92.4275C60.5109 90.079 74.5875 90.2907 96.2381 92.4797C97.3193 92.5907 98.344 93.0072 99.187 93.6783C100.03 94.3493 100.655 95.2459 100.986 96.2586C101.316 97.2712 101.338 98.356 101.048 99.3805C100.758 100.405 100.17 101.325 99.3544 102.028C73.8028 123.805 59.2003 123.505 35.55 102.05C34.3969 101.005 33.75 99.517 33.75 97.9825Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M95.9485 95.2133C74.4694 93.0408 60.5953 92.8373 39.1191 95.161C38.4121 95.2416 37.7604 95.5742 37.2887 96.0953C36.817 96.6164 36.5584 97.2894 36.5625 97.9853C36.5625 98.7718 36.8972 99.517 37.4625 100.034C49.185 110.666 58.0669 115.47 66.7491 115.5C75.4622 115.53 84.8222 110.765 97.5066 99.957C97.9095 99.6063 98.1996 99.1487 98.3416 98.6398C98.4836 98.1309 98.4713 97.5927 98.3062 97.0905C98.1412 96.5883 97.8305 96.1438 97.4119 95.811C96.9934 95.4782 96.4849 95.2688 95.9485 95.2133ZM38.5031 89.694C60.4294 87.3208 74.7113 87.5353 96.5306 89.7435C98.1571 89.9095 99.6988 90.5356 100.967 91.5451C102.235 92.5546 103.175 93.9038 103.671 95.4274C104.167 96.9511 104.198 98.5831 103.76 100.124C103.322 101.664 102.434 103.046 101.205 104.101C88.3378 115.068 77.6222 121.041 66.7322 121C55.8113 120.962 45.5681 114.887 33.6403 104.066C32.7863 103.288 32.1055 102.346 31.6405 101.299C31.1754 100.253 30.9361 99.1237 30.9375 97.9825C30.9334 95.9322 31.7031 93.9525 33.0991 92.4226C34.4951 90.8926 36.4193 89.9229 38.5031 89.694Z" fill="white"/>
<path d="M90 55C90 60.8348 87.6295 66.4305 83.4099 70.5564C79.1903 74.6822 73.4674 77 67.5 77C61.5326 77 55.8097 74.6822 51.5901 70.5564C47.3705 66.4305 45 60.8348 45 55C45 49.1652 47.3705 43.5695 51.5901 39.4436C55.8097 35.3178 61.5326 33 67.5 33C73.4674 33 79.1903 35.3178 83.4099 39.4436C87.6295 43.5695 90 49.1652 90 55Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 71.5C71.9755 71.5 76.2678 69.7616 79.4324 66.6673C82.5971 63.5729 84.375 59.3761 84.375 55C84.375 50.6239 82.5971 46.4271 79.4324 43.3327C76.2678 40.2384 71.9755 38.5 67.5 38.5C63.0245 38.5 58.7322 40.2384 55.5676 43.3327C52.4029 46.4271 50.625 50.6239 50.625 55C50.625 59.3761 52.4029 63.5729 55.5676 66.6673C58.7322 69.7616 63.0245 71.5 67.5 71.5ZM67.5 77C73.4674 77 79.1903 74.6822 83.4099 70.5564C87.6295 66.4305 90 60.8348 90 55C90 49.1652 87.6295 43.5695 83.4099 39.4436C79.1903 35.3178 73.4674 33 67.5 33C61.5326 33 55.8097 35.3178 51.5901 39.4436C47.3705 43.5695 45 49.1652 45 55C45 60.8348 47.3705 66.4305 51.5901 70.5564C55.8097 74.6822 61.5326 77 67.5 77Z" fill="white"/>
</svg>
`

const info = `<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_237_10)">
<path d="M34 45C34.85 45 35.563 44.712 36.139 44.136C36.715 43.56 37.002 42.848 37 42V29.925C37 29.075 36.712 28.375 36.136 27.825C35.56 27.275 34.848 27 34 27C33.15 27 32.437 27.288 31.861 27.864C31.285 28.44 30.998 29.152 31 30V42.075C31 42.925 31.288 43.625 31.864 44.175C32.44 44.725 33.152 45 34 45ZM34 21C34.85 21 35.563 20.712 36.139 20.136C36.715 19.56 37.002 18.848 37 18C37 17.15 36.712 16.437 36.136 15.861C35.56 15.285 34.848 14.998 34 15C33.15 15 32.437 15.288 31.861 15.864C31.285 16.44 30.998 17.152 31 18C31 18.85 31.288 19.563 31.864 20.139C32.44 20.715 33.152 21.002 34 21ZM34 60C29.85 60 25.95 59.212 22.3 57.636C18.65 56.06 15.475 53.923 12.775 51.225C10.075 48.525 7.938 45.35 6.364 41.7C4.79 38.05 4.002 34.15 4 30C4 25.85 4.788 21.95 6.364 18.3C7.94 14.65 10.077 11.475 12.775 8.775C15.475 6.075 18.65 3.938 22.3 2.364C25.95 0.79 29.85 0.002 34 0C38.15 0 42.05 0.788 45.7 2.364C49.35 3.94 52.525 6.077 55.225 8.775C57.925 11.475 60.063 14.65 61.639 18.3C63.215 21.95 64.002 25.85 64 30C64 34.15 63.212 38.05 61.636 41.7C60.06 45.35 57.923 48.525 55.225 51.225C52.525 53.925 49.35 56.063 45.7 57.639C42.05 59.215 38.15 60.002 34 60Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_237_10" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_237_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_237_10" result="shape"/>
</filter>
</defs>
</svg>
`

const settings = `<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9751 55L18.8806 46.2C18.2877 45.9708 17.7286 45.6958 17.2032 45.375C16.6779 45.0542 16.1653 44.7104 15.6654 44.3438L7.52488 47.7812L0 34.7188L7.04602 29.3563C7.00042 29.0354 6.97761 28.7256 6.97761 28.4267V26.5733C6.97761 26.2744 7.00042 25.9646 7.04602 25.6437L0 20.2812L7.52488 7.21875L15.6654 10.6562C16.1671 10.2896 16.6915 9.94583 17.2388 9.625C17.7861 9.30417 18.3333 9.02917 18.8806 8.8L19.9751 0H35.0249L36.1194 8.8C36.7123 9.02917 37.2714 9.30417 37.7968 9.625C38.3221 9.94583 38.8347 10.2896 39.3346 10.6562L47.4751 7.21875L55 20.2812L47.954 25.6437C47.9996 25.9646 48.0224 26.2744 48.0224 26.5733V28.4267C48.0224 28.7256 47.9768 29.0354 47.8856 29.3563L54.9316 34.7188L47.4067 47.7812L39.3346 44.3438C38.8329 44.7104 38.3085 45.0542 37.7612 45.375C37.2139 45.6958 36.6667 45.9708 36.1194 46.2L35.0249 55H19.9751ZM27.6368 37.125C30.2819 37.125 32.5394 36.1854 34.4092 34.3063C36.279 32.4271 37.2139 30.1583 37.2139 27.5C37.2139 24.8417 36.279 22.5729 34.4092 20.6937C32.5394 18.8146 30.2819 17.875 27.6368 17.875C24.9461 17.875 22.6768 18.8146 20.8289 20.6937C18.9809 22.5729 18.0579 24.8417 18.0597 27.5C18.0597 30.1583 18.9828 32.4271 20.8289 34.3063C22.675 36.1854 24.9443 37.125 27.6368 37.125Z" fill="white"/>
</svg>
`

const friends = `<svg width="60" height="55" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 47.1429V55H17.5V47.1429C17.5 47.1429 17.5 31.4286 32.5 31.4286C47.5 31.4286 47.5 47.1429 47.5 47.1429ZM40 11.7857C40 9.45472 39.5601 7.17608 38.736 5.23793C37.9119 3.29978 36.7406 1.78917 35.3701 0.897139C33.9997 0.00510659 32.4917 -0.22829 31.0368 0.226464C29.582 0.681219 28.2456 1.8037 27.1967 3.45196C26.1478 5.10022 25.4335 7.20024 25.1441 9.48644C24.8547 11.7726 25.0032 14.1424 25.5709 16.2959C26.1386 18.4495 27.0999 20.2901 28.3332 21.5852C29.5666 22.8802 31.0166 23.5714 32.5 23.5714C34.4891 23.5714 36.3968 22.3297 37.8033 20.1195C39.2098 17.9092 40 14.9115 40 11.7857ZM48 31.6643C49.3666 33.6455 50.4683 36.0346 51.2409 38.6922C52.0136 41.3497 52.4416 44.2225 52.5 47.1429V55H60V47.1429C60 47.1429 60 33.5893 48 31.6643ZM45 4.48448e-06C44.2447 0.000714822 43.494 0.186271 42.775 0.550004C44.2376 3.84596 45.0218 7.76751 45.0218 11.7857C45.0218 15.8039 44.2376 19.7255 42.775 23.0214C43.494 23.3852 44.2447 23.5707 45 23.5714C46.9891 23.5714 48.8968 22.3297 50.3033 20.1195C51.7098 17.9092 52.5 14.9115 52.5 11.7857C52.5 8.65995 51.7098 5.66221 50.3033 3.45196C48.8968 1.24171 46.9891 4.48448e-06 45 4.48448e-06ZM20 19.6429H12.5V7.85715H7.5V19.6429H0V27.5H7.5V39.2857H12.5V27.5H20V19.6429Z" fill="white"/>
</svg>
`

const dark_mode = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_237_11" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="54" height="54">
<path d="M30.0038 5L36.5913 11.5875H48.4125V23.4075L55 29.995L48.4125 36.5925V48.4125H36.5925L30.005 55L23.4075 48.4125H11.5875V36.5925L5 29.9962L11.5875 23.4087V11.5875H23.4075L30.0038 5Z" fill="white" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.75 21.25C33.75 31.25 27.5 32.5 21.25 32.5C21.25 37.5 29.375 42.5 36.25 37.5C43.125 32.5 38.75 21.25 33.75 21.25Z" fill="black" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</mask>
<g mask="url(#mask0_237_11)">
<path d="M0 0H60V60H0V0Z" fill="white"/>
</g>
</svg>
`

const home = `<svg width="86" height="78" viewBox="0 0 86 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.8333 61.75V45.5H50.1667V61.75C50.1667 63.5375 51.7792 65 53.75 65H64.5C66.4708 65 68.0833 63.5375 68.0833 61.75V39H74.175C75.8233 39 76.6117 37.1475 75.3575 36.1725L45.4008 11.7C44.0392 10.595 41.9608 10.595 40.5992 11.7L10.6425 36.1725C9.42415 37.1475 10.1767 39 11.825 39H17.9167V61.75C17.9167 63.5375 19.5292 65 21.5 65H32.25C34.2208 65 35.8333 63.5375 35.8333 61.75Z" fill="white"/>
</svg>
`

const comments = `<svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_237_22)">
<path d="M19.5 34.375C30.2719 34.375 39 26.6797 39 17.1875C39 7.69531 30.2719 0 19.5 0C8.72811 0 -1.15561e-05 7.69531 -1.15561e-05 17.1875C-1.15561e-05 20.957 1.37811 24.4434 3.71249 27.2852C3.38436 28.2031 2.89686 29.0137 2.38124 29.6973C1.93124 30.3027 1.47186 30.7715 1.13436 31.0937C0.965613 31.25 0.824988 31.377 0.731238 31.4551C0.684363 31.4941 0.646863 31.5234 0.628113 31.5332L0.609363 31.5527C0.0937384 31.9531 -0.131262 32.6562 0.0749884 33.291C0.281238 33.9258 0.853113 34.375 1.49999 34.375C3.54374 34.375 5.60624 33.8281 7.32186 33.1543C8.18436 32.8125 8.99061 32.4316 9.69374 32.041C12.5719 33.5254 15.9187 34.375 19.5 34.375ZM42 17.1875C42 28.1543 32.7094 36.416 21.7031 37.4023C23.9812 44.668 31.5375 50 40.5 50C44.0812 50 47.4281 49.1504 50.3156 47.666C51.0187 48.0566 51.8156 48.4375 52.6781 48.7793C54.3937 49.4531 56.4562 50 58.5 50C59.1469 50 59.7281 49.5605 59.925 48.916C60.1219 48.2715 59.9062 47.5684 59.3812 47.168L59.3625 47.1484C59.3437 47.1289 59.3062 47.1094 59.2594 47.0703C59.1656 46.9922 59.025 46.875 58.8562 46.709C58.5187 46.3867 58.0594 45.918 57.6094 45.3125C57.0937 44.6289 56.6062 43.8086 56.2781 42.9004C58.6125 40.0684 59.9906 36.582 59.9906 32.8027C59.9906 23.7402 52.0312 16.3086 41.9344 15.6641C41.9719 16.1621 41.9906 16.6699 41.9906 17.1777L42 17.1875Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_237_22">
<rect width="60" height="50" fill="white"/>
</clipPath>
</defs>
</svg>
`
