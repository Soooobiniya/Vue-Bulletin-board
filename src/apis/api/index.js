import instance from "../utils/instance";

// 게시물 리스트
export const getPostList = async (repoName) => {
    try {
        return await instance.get(`repos/Soooobiniya/${repoName}/issues?per_page=10&page=1`);
    } catch (err) {
        console.log(err);
    }
}

// 게시물 상세
export const getPost = (repoName, id) => {
    try {
        return instance.get(`repos/Soooobiniya/${repoName}/issues/${id}`);
    } catch (err) {
        console.log(err);
    }
}

// 게시물 생성
export const createPost = (repoName, data) => {
    try {
        return instance.post(`repos/Soooobiniya/${repoName}/issues`, data);
    } catch (err) {
        console.log(err);
    }
}

// 게시물 수정
export const editPost = (repoName, id, data) => {
    try {
        return instance.patch(`repos/Soooobiniya/${repoName}/issues/${id}`, data);
    } catch (err) {
        console.log(err);
    }
}

// 게시물 삭제 (state: open -> closed)
export const deletePost = async (repoName, id) => {
    try {
        return await instance.patch(`repos/Soooobiniya/${repoName}/issues/${id}`, { "state": "closed" });
    } catch (err) {
        console.log(err);
    }
}

// 게시물 검색
export const searchPost = async (repoName, searchText, searchType) => {
    try {
        if (searchType === "all") {
            return await instance.get(`search/issues?q=${searchText}+repo:Soooobiniya/${repoName}`);
        }
        else {
            return await instance.get(`search/issues?q=${searchText}+in:${searchType}+repo:Soooobiniya/${repoName}`);
        }
    } catch (err) {
        console.log(err);
    }
}