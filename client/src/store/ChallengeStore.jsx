import { makeAutoObservable } from 'mobx';

export default class ChallengeStore {
  constructor() {
    this._types = [];
    this._difficulties = [];
    this._challenges = [];
    this._selectedType = {};
    this._selectedDifficulty = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setDifficulties(difficulties) {
    this._difficulties = difficulties;
  }
  setChallenges(challenges) {
    this._challenges = challenges;
  }
  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedDifficulty(difficulty) {
    this.setPage(1);
    this._selectedDifficulty = difficulty;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get difficulties() {
    return this._difficulties;
  }
  get challenges() {
    return this._challenges;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedDifficulty() {
    return this._selectedDifficulty;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
