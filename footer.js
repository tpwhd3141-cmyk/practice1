(function () {

  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-col">
        <h4>카탈로그</h4>
        <ul>
          <li><a href="#">› 금화</a></li><li><a href="#">› 금화1</a></li>
          <li><a href="#">› 금화2</a></li><li><a href="#">› 금화3</a></li>
        </ul>
        <h4 style="margin-top:1.5rem">기타 서비스</h4>
        <ul>
          <li><a href="#">› 예정1</a></li><li><a href="#">› 예정2</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>문의 사항</h4>
        <ul>
          <li><a href="#">› 내 계정</a></li><li><a href="#">› 주문 내역</a></li><li><a href="#">› 고객센터</a></li>
        </ul>
        <h4 style="margin-top:1.5rem">관련 정보</h4>
        <ul>
          <li><a href="#">› 회사 소개</a></li><li><a href="#">› 온라인 예약</a></li>
          <li><a href="#">› 거래 안내</a></li><li><a href="#">› 오시는 길</a></li>
          <li><a href="#">› 귀금속 투명성</a></li><li><a href="#">› 정품 인증</a></li>
          <li><a href="#">› 서비스 약관</a></li><li><a href="#">› 자주 묻는 질문</a></li>
        </ul>
      </div>
      <div class="footer-locations">
        <h4>오시는 길</h4>
        <div class="location-grid">
          <div class="location-item">
            <strong>서울 본점</strong>
            <p>서울특별시 종로구 종로 1가 1번지<br>타임스퀘어 CBD<br>02-1234-5678</p>
            <p>월 - 금 09:00 - 18:00<br>점심시간 12:00 - 13:00</p>
          </div>
          <div class="location-item">
            <strong>강남 지점</strong>
            <p>서울특별시 강남구 테헤란로 123<br>강남파이낸스센터 10층<br>02-9876-5432</p>
            <p>월 - 금 13:00 - 17:00</p>
          </div>
        </div>
        <p class="location-notice">원활한 서비스를 위해 방문 전 예약을 권장합니다</p>
        <div class="social-section">
          <h4>소셜 미디어</h4>
          <div class="social-icons">
            <a href="#" class="social-icon facebook">f</a>
            <a href="#" class="social-icon instagram">📷</a>
            <a href="#" class="social-icon youtube">▶</a>
            <a href="#" class="social-icon line">LINE</a>
            <a href="#" class="social-icon kakao">K</a>
          </div>
        </div>
        <div class="lang-section">
          <h4>언어</h4>
          <div class="lang-options">
            <a href="#" class="lang-opt active">한국어</a>
            <a href="#" class="lang-opt">English</a>
            <a href="#" class="lang-opt">繁體中文</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 MIDAS BULLION 귀금속 전문점. 사업자등록번호: 123-45-67890</p>
      <p>귀금속은 투자 위험이 있습니다. 투자 전 충분한 검토를 권장합니다.</p>
    </div>
  `;

})();
