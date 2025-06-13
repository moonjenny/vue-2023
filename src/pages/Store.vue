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
        <div class="name-brand-wrapper"> <span class="store-name">{{ store.name }}</span>
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
      <div id="naver-map" class="naver-map"></div> <div v-if="selectedStoreOnMap" class="map-overlay-card">
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
const currentView = ref('map'); // 'map' 또는 'list'
const selectedStoreOnMap = ref(null); // 지도에 표시될 매장 정보

// 더미 데이터 (실제 서비스에서는 API 호출로 가져옴)
const allStores = ref([
  { id: 1, name: '매장명', brand: '브랜드', address: '서울특별시 강남구 테헤란로20길 9 동궁빌딩 6층', phone: '1234-5678-9123', region: '서울', lat: 37.50096, lng: 127.03713 },
  { id: 2, name: '강남점', brand: '브랜드', address: '서울특별시 강남구 테헤란로20길 9 동궁빌딩 6층', phone: '02-1234-5678', region: '서울', lat: 37.50096, lng: 127.03713 },
  { id: 3, name: '부산점', brand: '다른브랜드', address: '부산광역시 중구 중앙대로 123 롯데백화점', phone: '051-123-4567', region: '부산', lat: 35.17981, lng: 129.0750 },
  { id: 4, name: '종로점', brand: '브랜드', address: '서울특별시 종로구 종로 100', phone: '02-9876-5432', region: '서울', lat: 37.5700, lng: 126.9768 },
]);

// 중복 없는 브랜드 및 지역 목록 생성
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

let map = null; // Google Map 객체
let markers = []; // 마커 배열

// 지도 초기화 함수
const initMap = () => {
  // window.google.maps가 로드되었는지 확인
  if (typeof window.google === 'object' && typeof window.google.maps === 'object' && document.getElementById('google-map')) {
    const mapOptions = {
      center: { lat: 37.5665, lng: 126.9780 }, // 서울 시청 기준
      zoom: 12,
      mapId: 'YOUR_MAP_ID' // Google Cloud Console에서 생성한 맵 ID (선택 사항)
    };
    map = new window.google.maps.Map(document.getElementById('google-map'), mapOptions);
    displayMarkers(filteredStores.value);
  } else {
    // Google Maps API가 로드될 때까지 기다림
    // 또는 오류 메시지 표시
    console.warn("Google Maps API not yet loaded or map container not found. Retrying in 100ms...");
    setTimeout(initMap, 100); // 100ms 후 재시도
  }
};

// 마커 표시 함수
const displayMarkers = (storesToDisplay) => {
  // 기존 마커 제거
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  if (storesToDisplay.length === 0) {
    selectedStoreOnMap.value = null;
    return;
  }

  const bounds = new window.google.maps.LatLngBounds();

  storesToDisplay.forEach(store => {
    const position = { lat: store.lat, lng: store.lng };
    const marker = new window.google.maps.Marker({
      position: position,
      map: map,
      title: store.name,
    });

    markers.push(marker);
    bounds.extend(position);

    // 마커 클릭 시 정보 표시
    marker.addListener('click', () => {
      selectedStoreOnMap.value = store;
      map.setCenter(position); // 클릭한 마커를 지도의 중심으로
      map.setZoom(15); // 확대 (선택 사항)
    });
  });

  if (map && !bounds.isEmpty()) { // bounds가 비어있지 않은 경우에만 이동
    map.fitBounds(bounds);

    // 단일 매장일 경우 확대 레벨 고정 (fitBounds가 너무 확대할 수 있으므로)
    if (storesToDisplay.length === 1) {
      map.setZoom(15);
    }
  }

  // 매장이 하나일 경우 해당 매장 정보 즉시 표시
  if (storesToDisplay.length === 1) {
    selectedStoreOnMap.value = storesToDisplay[0];
  } else {
    selectedStoreOnMap.value = null; // 여러 개일 때는 기본적으로 카드 안 보임
  }
};

// 검색 버튼 클릭 또는 Enter 시 검색 수행
const performSearch = () => {
  // filteredStores computed 속성이 자동으로 업데이트되므로, 마커만 다시 그립니다.
  if (currentView.value === 'map' && map) {
    displayMarkers(filteredStores.value);
  }
};

onMounted(() => {
  // Google Maps API가 로드될 때까지 기다립니다.
  // window.google이 존재하고 window.google.maps가 존재하는지 확인합니다.
  const checkGoogleMapsLoaded = setInterval(() => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      clearInterval(checkGoogleMapsLoaded);
      initMap();
    }
  }, 100);
});

// 검색 조건 변경 시 마커 업데이트 (지도가 활성화된 경우)
watch([filteredStores, currentView], ([newFilteredStores, newView]) => {
  if (newView === 'map' && map) {
    displayMarkers(newFilteredStores);
  }
}, { immediate: true }); // 컴포넌트 마운트 시 즉시 실행
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss"; // scss import 경로 확인

.store-guide-page {
  padding: 20px;
  max-width: 768px; // 모바일 뷰포트 고려 (조정 가능)
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
        grid-column: 1 / 2; /* 첫 번째 컬럼 차지 */
        grid-row: 1 / 2; /* 첫 번째 로우 차지 */
        display: flex; /* Flexbox 적용 */
        align-items: baseline; /* 텍스트 베이스라인 정렬 */
        gap: 12px; /* 매장명과 브랜드 사이 간격 */
        flex-wrap: wrap; // 공간 부족 시 줄바꿈
        margin-bottom: 12px; // 다음 요소와의 간격 조정
      }

      .store-name {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: #111;
        // grid 속성은 name-brand-wrapper가 관리하므로 여기서 제거
        // grid-column: 1 / 2;
        // grid-row: 1 / 2;
      }

      .store-brand {
        font-size: 14px;
        color: #555;
        // grid 속성은 name-brand-wrapper가 관리하므로 여기서 제거
        // grid-column: 1 / 2;
        // grid-row: 2 / 3;
      }

      .store-address {
        font-size: 14px;
        color: #666;
        font-style: normal;
        grid-column: 1 / 2;
        grid-row: 2 / 3; /* 이제 2번째 로우 차지 (이전에는 3번째) */
      }

      .store-phone {
        font-size: 14px;
        color: #666;
        grid-column: 1 / 2;
        grid-row: 3 / 4; /* 이제 3번째 로우 차지 (이전에는 4번째) */
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

    .google-map {
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