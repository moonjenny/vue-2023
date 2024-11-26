<template>
  <section class="filter-price">
    <div class="price-form">
      <label for="">최소가</label>
      <span>
        <input type="number" name="" id="">
        <i class="won">원</i>
      </span>
    </div>
    <div class="price-form">
      <label for="">최대가</label>
      <span>
        <input type="number" name="" id="">
        <i class="won">원</i>
      </span>
    </div>
  </section>
</template>

<style lang="scss">

  .filter-price{
    position:relative;
    padding:12px 20px;
    .price-form {
      display:flex;
      flex-wrap: wrap;
      width:100%;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom:10px;
      gap: 14px;

      label {
        font-size:14px;
      }
      span {
        position:relative;
        flex-basis:auto;
        width:66%;
        input[type="number"] {
          padding: 8px 28px 9px 12px;
          width:100%;
          font-size: 14px;
          text-align:right;
          border: 1px solid #cccccc;
          box-sizing: border-box;
          border-radius: 0;
          outline: none;
          transition: border-color .15s ease-in-out;
          appearance: none;
          &:focus {
            border-color:#111;
            & + .won {
              color:#111;
            }
          }
        }
        .won {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 14px;
          font-style:normal;
          font-size:14px;
          color:#999;
        }
      }

    }
  }
</style>