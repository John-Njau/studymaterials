<template>
    <div class="page-under-development">
      <img src="../assets/page_under_construction.png" alt="Under development" />
      <p>We apologize for the inconvenience. Please check back later for updates.</p>
      <!-- button to home -->
        <router-link to="/">
            <button class="button is-info">Back Home</button></router-link>
    </div>
  </template>
  
  <style>
    .page-under-development {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    .page-under-development img {
      width: 200px;
      height: 200px;
    }
  </style>