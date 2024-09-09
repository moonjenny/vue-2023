<template>
  <div class="minesweeper">
    <h1>지뢰찾기 게임</h1>
    <div class="status">
      <p>남은 폭탄: {{ numMines - flaggedCount }}</p>
      <div class="controls">
      <label>폭탄 개수: </label>
      <input v-model="numMines" type="number" min="1" :max="maxMines">
      <label>행의 수: </label>
      <input v-model="numRows" type="number" min="1" :max="maxRows">
      <label>열의 수: </label>
      <input v-model="numCols" type="number" min="1" :max="maxCols">
      <button class="btn-reset" @click="resetGame">게임 리셋</button>
    </div>
    </div>
    <p v-if="allMinesMarked" class="congratulations">축하합니다! 모든 폭탄을 찾았습니다!</p>
    <p v-if="gameOver" class="game-over">게임 오버! 💥</p>
    <div class="board">
      <div
        v-for="(row, rowIndex) in board"
        :key="rowIndex"
        class="row"
      >
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="cell"
          :class="{ revealed: cell.revealed || (gameOver && cell.isMine), mine: cell.isMine, marked: cell.marked }"
          @click="revealCell(rowIndex, colIndex)"
          @contextmenu.prevent="markBomb(rowIndex, colIndex)"
        >
          {{ cell.revealed ? (cell.isMine ? '💣' : cell.adjacentMines || '') : cell.marked ? '🚩' : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numRows: 20,
      numCols: 20,
      numMines: 60,
      // 추가: 최대값 정의
      maxRows: 80,
      maxCols: 80,
      maxMines: 800,
      board: [],
      gameOver: false, // 게임 오버 상태 추가
    };
  },
  computed: {
    flaggedCount() {
      return this.board.reduce((count, row) => {
        return count + row.filter(cell => cell.marked).length;
      }, 0);
    },
    allMinesMarked() {
      return this.board.every(row => row.every(cell => (cell.isMine && cell.marked) || !cell.isMine));
    },
  },
  created() {
    this.initializeBoard();
  },
  methods: {
    initializeBoard() {
      this.gameOver = false; // 게임 시작 시 게임 오버 상태 초기화
      this.board = Array.from({ length: this.numRows }, () =>
        Array.from({ length: this.numCols }, () => ({
          isMine: false,
          revealed: false,
          marked: false,
          adjacentMines: 0,
        }))
      );

      // 미리 폭탄과 빈 셀을 표시하고 revealed 상태로 만듭니다.
      // this.board[2][2].isMine = true;
      // this.board[10][10].revealed = true;
      // this.board[15][5].adjacentMines = 0;

      this.placeMines();
      this.calculateAdjacentMines();
    },
    placeMines() {
      let placedMines = 0;
      while (placedMines < this.numMines) {
        const randomRow = Math.floor(Math.random() * this.numRows);
        const randomCol = Math.floor(Math.random() * this.numCols);
        if (!this.board[randomRow][randomCol].isMine) {
          this.board[randomRow][randomCol].isMine = true;
          placedMines++;
        }
      }
    },
    calculateAdjacentMines() {
      for (let row = 0; row < this.numRows; row++) {
        for (let col = 0; col < this.numCols; col++) {
          if (!this.board[row][col].isMine) {
            const adjacentCells = this.getAdjacentCells(row, col);
            this.board[row][col].adjacentMines = adjacentCells.filter(cell => cell.isMine).length;
          }
        }
      }
    },
    getAdjacentCells(row, col) {
      const adjacentCells = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const newRow = row + dx;
          const newCol = col + dy;
          if (newRow >= 0 && newRow < this.numRows && newCol >= 0 && newCol < this.numCols) {
            adjacentCells.push(this.board[newRow][newCol]);
          }
        }
      }
      return adjacentCells;
    },
    revealCell(row, col) {
      const cell = this.board[row][col];
      if (!cell.revealed && !cell.marked) {
        cell.revealed = true;
        if (!cell.isMine && cell.adjacentMines === 0) {
          const adjacentCells = this.getAdjacentCells(row, col);
          for (const adjacentCell of adjacentCells) {
            this.revealCell(adjacentCell.row, adjacentCell.col);
          }
        } else if (cell.isMine) {
          console.log('게임 오버! 💥');
          this.gameOver = true; // 게임 오버 상태 변경
        }
      }
    },
    markBomb(row, col) {
      const cell = this.board[row][col];
      if (!cell.revealed) {
        cell.marked = !cell.marked;
        if (this.allMinesMarked) {
          alert('축하합니다! 모든 폭탄을 찾았습니다!');
        }
      }
    },
    resetGame() {
      this.initializeBoard();
    },
  },
};
</script>

<style>
/* Add your styling here */

.btn-reset {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-reset:hover {
  background-color: #0056b3;
}
.status {
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
}
.board {
  grid-template-columns: repeat(8, 40px);
  grid-template-rows: repeat(8, 40px);
  gap: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin:40px;
}

.row {
  display: flex;
}

.cell {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}

.revealed {
  background-color: #eee;
  cursor: default;
}

.mine {
  /* background-color: red; */
}

.marked {
  background-color: yellow;
}
.congratulations {
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  color: green;
}
</style>
