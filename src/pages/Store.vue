<template>
  <div class="store-guide-page">
    <div class="search-section">
      <div class="search-input-wrapper">
        <input type="text" placeholder="지역/매장명/전화번호를 입력해 주세요." v-model="searchQuery" @keyup.enter="performSearch" />
        <button class="search-button" @click="performSearch" aria-label="검색">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.5918 18.0525C15.0562 19.2717 13.1131 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.1131 19.2717 15.0562 18.0525 16.5918L22 20.5393L20.5393 22L16.5918 18.0525Z" fill="#111111"/>
          </svg>
        </button>
      </div>
      <div class="filter-dropdowns">
        <div class="dropdown-wrapper">
          <select v-model="selectedBrand">
            <option value="">브랜드</option>
            <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
          </select>
          <span class="select-arrow"></span>
        </div>
        <div class="dropdown-wrapper">
          <select v-model="selectedRegion">
            <option value="">지역전체</option>
            <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
          </select>
          <span class="select-arrow"></span>
        </div>
      </div>
    </div>

    <div class="store-count">
      {{ filteredStores.length }}개의 매장
    </div>

    <div class="view-toggle">
      <button :class="{ active: currentView === 'map' }" @click="currentView = 'map'">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 3C16.4647 3 19.5 5.64193 19.5 9.5C19.5 12.1161 17.7188 15.0001 15.7354 17.3555C14.7673 18.505 13.7963 19.4768 13.0664 20.1611C12.8553 20.3591 12.6637 20.5315 12.5 20.6777C12.3363 20.5315 12.1447 20.3591 11.9336 20.1611C11.2037 19.4768 10.2327 18.505 9.26465 17.3555C7.28121 15.0001 5.5 12.1161 5.5 9.5C5.5 5.64193 8.5353 3 12.5 3Z" stroke="#111111" stroke-width="2"/>
          <path d="M12.5 13C14.1569 13 15.5 11.6569 15.5 10C15.5 8.34315 14.1569 7 12.5 7C10.8431 7 9.5 8.34315 9.5 10C9.5 11.6569 10.8431 13 12.5 13Z" fill="#111111"/>
        </svg>
        지도 보기
      </button>
      <button :class="{ active: currentView === 'list' }" @click="currentView = 'list'">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.5" y="4" width="20" height="2" fill="#111111"/>
          <rect x="2.5" y="11" width="20" height="2" fill="#111111"/>
          <rect x="2.5" y="18" width="20" height="2" fill="#111111"/>
        </svg>
        목록 보기
      </button>
    </div>

    <div v-if="currentView === 'list'" class="store-list">
      <div v-for="store in filteredStores" :key="store.id" class="store-item">
        <div class="name-brand-wrapper">
          <span class="store-name">{{ store.name }}</span>
          <span class="store-brand">{{ store.brand }}</span>
        </div>
        <address class="store-address">{{ store.address }}</address>
        <span class="store-phone">{{ store.phone }}</span>
        <button class="arrow-button" aria-label="매장 상세 보기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#111" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </button>
      </div>
      <div v-if="filteredStores.length === 0" class="no-results">
        <p>검색 결과가 없습니다.</p>
      </div>
    </div>

    <div v-if="currentView === 'map'" class="store-map-container">
      <div id="kakao-map" class="kakao-map"></div>
      <div v-if="selectedStoreOnMap" class="map-overlay-card">
        <span class="store-name">{{ selectedStoreOnMap.name }}</span>
        <span class="store-brand">{{ selectedStoreOnMap.brand }}</span>
        <address class="store-address">{{ selectedStoreOnMap.address }}</address>
        <span class="store-phone">{{ selectedStoreOnMap.phone }}</span>
        <button class="arrow-button" aria-label="매장 상세 보기">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L7 7L2 12" stroke="#111111" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const searchQuery = ref('');
const selectedBrand = ref('');
const selectedRegion = ref('');
const currentView = ref('map'); // 'map' or 'list'
const selectedStoreOnMap = ref(null); // Store info to be displayed on the map overlay

// Dummy data (in a real service, this would be fetched via API)
const allStores = ref([
  { id: 1, name: '매장명1', brand: '브랜드A', address: '서울특별시 강남구 테헤란로20길 9 동궁빌딩 6층', phone: '02-1234-5678', region: '서울', lat: 37.50096, lng: 127.03713 },
  { id: 2, name: '매장명2', brand: '브랜드A', address: '서울특별시 서초구 강남대로 400', phone: '02-9876-5432', region: '서울', lat: 37.4981, lng: 127.0276 },
  { id: 3, name: '매장명3', brand: '브랜드B', address: '부산광역시 중구 중앙대로 123', phone: '051-123-4567', region: '부산', lat: 35.17981, lng: 129.0750 },
  { id: 4, name: '매장명4', brand: '브랜드C', address: '대구광역시 중구 동성로 100', phone: '053-456-7890', region: '대구', lat: 35.8698, lng: 128.6015 },
]);

// Compute unique brand and region lists for dropdowns
const brands = computed(() => [...new Set(allStores.value.map(store => store.brand))]);
const regions = computed(() => [...new Set(allStores.value.map(store => store.region))]);

const filteredStores = computed(() => {
  let tempStores = allStores.value;

  if (selectedBrand.value) {
    tempStores = tempStores.filter(store => store.brand === selectedBrand.value);
  }

  if (selectedRegion.value) {
    tempStores = tempStores.filter(store => store.region === selectedRegion.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    tempStores = tempStores.filter(store =>
      store.name.toLowerCase().includes(query) ||
      store.address.toLowerCase().includes(query) ||
      store.phone.toLowerCase().includes(query)
    );
  }
  return tempStores;
});

let map = null; // Kakao Map object
let markers = []; // Array to store Kakao Map markers

// Function to load Kakao Maps API script dynamically
const loadKakaoMapsScript = () => {
  return new Promise((resolve, reject) => {
    // Check if Kakao Maps API is already loaded
    if (typeof window.kakao !== 'undefined' && typeof window.kakao.maps !== 'undefined') {
      resolve();
      return;
    }

    const script = document.createElement('script');
    // Replace YOUR_KAKAO_MAPS_APP_KEY with your actual Kakao Maps JavaScript API Key
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e4a1592180cdc1c35ed4cc7f7ec5eaa2&libraries=services,clusterer,drawing`;
    script.async = true;
    script.onload = () => {
      console.log("Kakao Maps API script loaded.");
      kakao.maps.load(() => { // Ensure kakao.maps is ready
        resolve();
      });
    };
    script.onerror = () => {
      console.error("Failed to load Kakao Maps API script.");
      reject(new Error("Kakao Maps API script load failed."));
    };
    document.head.appendChild(script);
  });
};

// Map initialization function
const initMap = () => {
  const container = document.getElementById('kakao-map'); // Map container ID
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780), // Default center: Seoul City Hall
    level: 7 // Zoom level
  };
  map = new kakao.maps.Map(container, options);
  displayMarkers(filteredStores.value);
};

// Function to display markers on the map
const displayMarkers = (storesToDisplay) => {
  // Clear existing markers
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  if (storesToDisplay.length === 0) {
    selectedStoreOnMap.value = null;
    return;
  }

  const bounds = new kakao.maps.LatLngBounds();

  storesToDisplay.forEach(store => {
    const position = new kakao.maps.LatLng(store.lat, store.lng);
    const marker = new kakao.maps.Marker({
      map: map,
      position: position,
      title: store.name,
      // You can customize marker icons here if needed
      // image: new kakao.maps.MarkerImage(
      //   'path/to/your/marker-icon.png',
      //   new kakao.maps.Size(32, 32),
      //   { offset: new kakao.maps.Point(16, 32) }
      // )
    });

    markers.push(marker);
    bounds.extend(position);

    // Add click listener to marker
    kakao.maps.event.addListener(marker, 'click', () => {
      selectedStoreOnMap.value = store;
      map.setCenter(position); // Center map on clicked marker
      map.setLevel(3); // Zoom in (optional)
    });
  });

  if (map) {
    map.setBounds(bounds); // Adjust map view to fit all markers

    // If only one store, set a specific zoom level as setBounds might zoom in too much
    if (storesToDisplay.length === 1) {
      map.setLevel(3); // Adjust zoom level for a single marker
    }
  }

  // If there's only one store, display its info immediately
  if (storesToDisplay.length === 1) {
    selectedStoreOnMap.value = storesToDisplay[0];
  } else {
    selectedStoreOnMap.value = null; // Hide overlay card if multiple or no stores
  }
};

// Perform search on button click or Enter key
const performSearch = () => {
  // filteredStores computed property automatically updates, just redraw markers
  if (currentView.value === 'map' && map) {
    displayMarkers(filteredStores.value);
  }
};

onMounted(async () => {
  try {
    await loadKakaoMapsScript();
    initMap();
  } catch (error) {
    console.error("카카오맵 로드 오류:", error);
    // 사용자에게 오류 메시지를 표시하거나 대체 UI를 제공합니다.
  }
});

// Watch for changes in filtered stores or view, and update map/markers accordingly
watch([filteredStores, currentView], ([newFilteredStores, newView]) => {
  if (newView === 'map' && map) {
    displayMarkers(newFilteredStores);
  }
}, { immediate: true }); // Run immediately on component mount
</script>

<style lang="scss" scoped>
/* @import "@/assets/scss/common.scss"; */ // 공통 SCSS 파일 경로 확인 필요

.store-guide-page {
  padding: 20px;
  max-width: 768px; /* 모바일 뷰포트 고려 (조정 가능) */
  margin: 0 auto;
  font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;

  .search-section {
    margin-bottom: 32px;

    .search-input-wrapper {
      display: flex;
      border: 1px solid #ccc;
      margin-bottom: 12px;

      input {
        flex-grow: 1;
        border: none;
        padding: 15px;
        font-size: 14px;
        &:focus {
          outline: none;
        }
      }

      .search-button {
        background-color: #fff;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
        svg {
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }
      }
    }

    .filter-dropdowns {
      display: flex;
      gap: 8px; // 드롭다운 간 간격

      .dropdown-wrapper {
        position: relative;
        flex: 1;

        select {
          width: 100%;
          padding: 15px;
          border: 1px solid #ccc;
          appearance: none; // 기본 셀렉트 박스 스타일 제거
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #fff;
          font-size: 14px;
          cursor: pointer;
          border-radius: 0; // 모바일에서 border-radius 적용 방지

          &:focus {
            outline: none;
            border-color: #999;
          }
        }

        .select-arrow {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg); // 오른쪽 화살표
          width: 8px;
          height: 8px;
          margin-top: -2px;
          border-right: 1px solid #111;
          border-bottom: 1px solid #111;
          pointer-events: none; // 화살표 클릭 방지
        }
      }
    }
  }

  .store-count {
    font-size: 14px;
    color: #111;
    margin-bottom: 12px;
  }

  .view-toggle {
    display: flex;
    margin-bottom: 32px;
    gap: 8px;

    button {
      flex: 1;
      padding: 12px;
      background-color: #fff;
      border: 1px solid #ccc;
      font-size: 14px;
      color: #111;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      svg {
        width: 20px;
        height: 20px;
        stroke: #777;
      }

      & + button {
        border-left: 1px solid #eee;
      }

      &.active {
        background-color: #111;
        color: #fff;
        svg {
          stroke: #fff;
          fill: #fff;
        }

      }
    }
  }

  .store-list {
    .store-item {
      padding: 24px 0;
      border-bottom: 1px solid #ccc;
      display: grid;
      grid-template-columns: 1fr auto; // 이름, 브랜드, 주소, 전화번호
      grid-template-rows: auto auto auto;
      align-items: center;
      position: relative;

      &:first-child {
        border-top: 1px solid #333;
      }

      .name-brand-wrapper {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        align-items: baseline;
        gap: 12px; // 매장명과 브랜드 사이 간격
        flex-wrap: wrap; // 공간 부족 시 줄바꿈
        margin-bottom: 12px; // 다음 요소와의 간격 조정
      }

      .store-name {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: #111;
      }

      .store-brand {
        font-size: 14px;
        color: #555;
      }

      .store-address {
        font-size: 14px;
        color: #666;
        font-style: normal;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      .store-phone {
        font-size: 14px;
        color: #666;
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }

      .arrow-button {
        grid-column: 2 / 3;
        grid-row: 1 / 4; /* 모든 행에 걸쳐 배치 (총 3줄이 되었으므로 조정) */
        align-self: center;
        justify-self: end;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;

        svg {
          width: 18px;
          height: 18px;
          stroke: #999;
        }
      }
    }

    .no-results {
      text-align: center;
      padding: 50px 0;
      color: #777;
      font-size: 15px;
    }
  }

  .store-map-container {
    position: relative;
    width: 100%;
    height: 600px; // 지도의 높이 설정
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .kakao-map { // 클래스명 변경
      width: 100%;
      height: 100%;
      background-color: #ccc; // 맵 로딩 전 배경
    }

    .map-overlay-card {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      width: calc(100% - 40px); // 좌우 패딩 고려
      max-width: 350px; // 최대 너비 설정
      display: flex;
      flex-direction: column;
      gap: 5px;
      animation: slideUp 0.3s ease-out forwards; // 애니메이션 적용

      .store-name {
        font-size: 16px;
        font-weight: bold;
        color: #111;
      }

      .store-brand {
        font-size: 14px;
        color: #555;
      }

      .store-address {
        font-size: 13px;
        color: #777;
        font-style: normal;
      }

      .store-phone {
        font-size: 13px;
        color: #777;
        margin-top: 5px;
      }

      .arrow-button {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;

        svg {
          width: 24px;
          height: 24px;
          stroke: #999;
        }
      }
    }
  }
}

@keyframes slideUp {
  from {
    transform: translateX(-50%) translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}
</style>
