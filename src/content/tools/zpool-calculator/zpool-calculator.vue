<script setup lang="ts">

import { useThemeVars } from 'naive-ui';
import { useScriptTag } from '@vueuse/core';

const themeVars = useThemeVars();

const base = import.meta.env.BASE_URL ?? '/';

// Load scripts - wrap in async IIFE to avoid top-level await
(async () => {
  const { load: loadJQuery } = useScriptTag(`${base}zpool-calc/jquery.js`);
  await loadJQuery();

  const { load: loadCapacity } = useScriptTag(`${base}zpool-calc/capacity.js`);
  await loadCapacity();
})();
</script>

<template>
  <div>
    <table class="inputs">
      <tbody>
        <tr>
          <td><label id="disks" class="tooltip">?</label><label for="disks">Total Disks in Pool:</label></td>
          <td><input id="disks" class="monitor" type="text" name="disks" value="24"></td>

          <td><label id="add_disk" for="add_disk">Add Disk (TB):</label></td>
          <td><input id="add_disk" type="text" name="add_disk"></td>
        </tr>

        <tr>
          <td id="add_disk_buttons" colspan="2">
            <div class="rocker-button">
              <div id="plus_1" class="up half">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                1
              </div>
              <div id="minus_1" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
            <div class="rocker-button">
              <div id="plus_10" class="half up">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                10
              </div>
              <div id="minus_10" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
            <div class="rocker-button">
              <div id="plus_100" class="half up">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                100
              </div>
              <div id="minus_100" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
            <div class="add_disk_vrule" />
            <div class="rocker-button">
              <div id="plus_12" class="half up">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                12
              </div>
              <div id="minus_12" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
            <div class="rocker-button">
              <div id="plus_24" class="half up">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                24
              </div>
              <div id="minus_24" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
            <div class="rocker-button">
              <div id="plus_60" class="half up">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                60
              </div>
              <div id="minus_60" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
            <div class="rocker-button">
              <div id="plus_102" class="half up">
                <div class="arrow">
                  ?
                </div>
              </div>
              <div class="center-text">
                102
              </div>
              <div id="minus_102" class="half down">
                <div class="arrow">
                  ?
                </div>
              </div>
            </div>
          </td>

          <td id="add_disk_button">
            <button id="add_disk" type="button">
              Add Disk
            </button>
          </td>
          <td id="tb_gb_button">
            <button id="tb_gb" type="button">
              TB/GB
            </button>
          </td>
        </tr>

        <tr>
          <td><label id="min_spares" class="tooltip">?</label><label for="min_spares">Minimum Spares:</label></td>
          <td><input id="min_spares" class="monitor" type="text" name="min_spares" value="0"></td>

          <td><label id="add_vdev_type" for="add_vdev_type">New vdev Type:</label></td>
          <td>
            <select id="add_vdev_type" name="add_vdev_type">
              <option value="mirror">
                Mirror
              </option>
              <option value="z1">
                RAIDZ1
              </option>
              <option value="z2">
                RAIDZ2
              </option>
              <option value="z3">
                RAIDZ3
              </option>
              <option value="draid">
                dRAID
              </option>
            </select>
          </td>
        </tr>

        <tr id="new_vdev">
          <td><label id="use_new_slop" class="tooltip">?</label><label for="use_new_slop">OpenZFS 2.0.7 Slop:</label></td>
          <td><input id="use_new_slop" class="monitor" type="checkbox" name="use_new_slop" checked></td>

          <td><label id="add_vdev" for="add_vdev">New Vdev Width:</label></td>
          <td><input id="add_vdev" type="text" name="add_vdev"></td>
        </tr>

        <tr>
          <td><label id="recordsize" class="tooltip">?</label><label for="recordsize">ZFS recordsize value:</label></td>
          <td>
            <select id="recordsize" class="monitor" name="recordsize">
              <option value="4">
                4 KiB
              </option>
              <option value="8">
                8 KiB
              </option>
              <option value="16">
                16 KiB
              </option>
              <option value="32">
                32 KiB
              </option>
              <option value="64">
                64 KiB
              </option>
              <option value="128" selected>
                128 KiB
              </option>
              <option value="256">
                256 KiB
              </option>
              <option value="512">
                512 KiB
              </option>
              <option value="1024">
                1 MiB
              </option>
              <option value="2048">
                2 MiB
              </option>
              <option value="4096">
                4 MiB
              </option>
              <option value="8192">
                8 MiB
              </option>
              <option value="16384">
                16 MiB
              </option>
            </select>
          </td>

          <td id="vdev_button" colspan="2">
            <button id="add_vdev" type="button">
              Add vdev Layout
            </button>
          </td>
        </tr>

        <tr>
          <td><label id="ashift" class="tooltip">?</label><label for="ashift">ZFS ashift value:</label></td>
          <td>
            <select id="ashift" class="monitor" name="ashift">
              <option value="9">
                9
              </option>
              <option value="12" selected>
                12
              </option>
              <option value="13">
                13
              </option>
              <option value="14">
                14
              </option>
            </select>
          </td>

          <td />
        </tr>

        <tr>
          <td><label id="swap_size" class="tooltip">?</label><label for="swap_size">Disk Swap Size:</label></td>
          <td>
            <select id="swap_size" class="monitor" name="swap_size">
              <option value="0" selected>
                0 GiB
              </option>
              <option value="2">
                2 GiB
              </option>
              <option value="4">
                4 GiB
              </option>
              <option value="8">
                8 GiB
              </option>
            </select>
          </td>

          <td><label>Table Data:</label></td>
          <td>
            <input id="usable_cap_tib" class="monitor" type="radio" name="table_data" value="usable_cap_tib" checked>
            <label for="usable_cap_tib">Usable Capacity (TiB)</label><label id="usable_cap_tib" class="tooltip">?</label>
          </td>
        </tr>

        <tr>
          <td><label for="decimal_places">Decimal Places:</label></td>
          <td>
            <select id="decimal_places" class="monitor" name="decimal_places">
              <option value="0">
                0
              </option>
              <option value="1">
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3" selected>
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
              <option value="6">
                6
              </option>
              <option value="7">
                7
              </option>
              <option value="8">
                8
              </option>
              <option value="9">
                9
              </option>
              <option value="10">
                10
              </option>
              <option value="bytes">
                bytes
              </option>
            </select>
          </td>

          <td />
          <td>
            <input id="usable_cap_tb" class="monitor" type="radio" name="table_data" value="usable_cap_tb">
            <label for="usable_cap_tb">Usable Capacity (TB)</label><label id="usable_cap_tb" class="tooltip">?</label>
          </td>
        </tr>

        <tr>
          <td><label id="show_deflate" class="tooltip">?</label><label for="show_deflate">Show Deflate Ratio:</label></td>
          <td><input id="show_deflate" class="monitor" type="checkbox" name="show_deflate"></td>

          <td />
          <td>
            <input id="efficiency" class="monitor" type="radio" name="table_data" value="efficiency">
            <label for="efficiency">Capacity Efficiency</label><label id="efficiency" class="tooltip">?</label>
          </td>
        </tr>

        <tr>
          <td><label id="show_afr" class="tooltip">?</label><label for="show_afr">Show Pool AFR:</label></td>
          <td><input id="show_afr" class="monitor" type="checkbox" name="show_afr"></td>

          <td />
          <td>
            <input id="overhead" class="monitor" type="radio" name="table_data" value="overhead">
            <label for="overhead">ZFS Overhead</label><label id="overhead" class="tooltip">?</label>
          </td>
        </tr>

        <tr>
          <td><label id="disk_afr_label" for="disk_afr" style="color: grey;">Disk AFR (%):</label></td>
          <td><input id="disk_afr" class="monitor" type="text" name="disk_afr" value="5" disabled></td>

          <td />
          <td>
            <input id="cap_w_reserve" class="monitor" type="radio" name="table_data" value="cap_w_reserve">
            <label for="cap_w_reserve">Cap. w/ Reservation</label><label id="cap_w_reserve" class="tooltip">?</label>
          </td>
        </tr>

        <tr>
          <td><label id="fast_draid" class="tooltip">?</label><label for="fast_draid">Fast dRAID Calculation:</label></td>
          <td><input id="fast_draid" class="monitor" type="checkbox" name="fast_draid" checked></td>

          <td id="res_label">
            <label id="reservation" for="reservation" style="color: grey;">Reservation (%):</label>
          </td>
          <td id="res_input">
            <input id="reservation" class="monitor" type="text" name="reservation" value="20" disabled>
          </td>
        </tr>

        <tr>
          <td><label id="show" class="tooltip">?</label><label for="show">Show Only:</label></td>
          <td>
            <select id="show" class="monitor" name="show">
              <option value="all" selected>
                All
              </option>
              <option value="stripes">
                Mirrors/Stripes
              </option>
              <option value="raidz1">
                RAIDZ1
              </option>
              <option value="raidz2">
                RAIDZ2
              </option>
              <option value="raidz3">
                RAIDZ3
              </option>
              <option value="draid">
                dRAID
              </option>
            </select>
          </td>

          <td id="reset_button" colspan="2">
            <button id="reset_button" type="button">
              Reset
            </button>
          </td>
        </tr>

        <tr>
          <td id="status" colspan="4" />
        </tr>
      </tbody>
    </table>

    <n-space justify="center">
      <c-link target="_blank" to="/zpool-memo" mb-1 mt-2>
        See Zpool/OpenZFS Cheatsheet
      </c-link>
    </n-space>

    <p class="subsect_label">
      >-
    </p>

    <details id="common" class="raid_results">
      <summary>Common Layouts</summary>
      <div id="common" class="results-container">
        <table id="common" class="results" />
      </div>
    </details>

    <details id="stripes" class="raid_results">
      <summary>Raw, Stripes, & Mirrors</summary>
      <div id="stripes" class="results-container">
        <table id="stripes" class="results" />
      </div>
    </details>

    <details id="raidz1" class="raid_results">
      <summary>RAIDZ1</summary>
      <div id="raidz1" class="results-container">
        <table id="raidz1" class="results" />
      </div>
    </details>

    <details id="raidz2" class="raid_results">
      <summary>RAIDZ2</summary>
      <div id="raidz2" class="results-container">
        <table id="raidz2" class="results" />
      </div>
    </details>

    <details id="raidz3" class="raid_results">
      <summary>RAIDZ3</summary>
      <div id="raidz3" class="results-container">
        <table id="raidz3" class="results" />
      </div>
    </details>

    <details id="draid" class="raid_results">
      <summary>dRAID</summary>
      <div id="draid" class="results-container">
        <table id="draid" class="results" />
      </div>
    </details>

    <h2 id="debug_vals" class="sect_labels">
      Calculation Values
    </h2>
    <div id="debug_vals">
      <p class="subsect_label">
        (Click table cells above to freeze/unfreeze)
      </p>
      <table id="debug_vals" class="debug" />
    </div>
  </div>
</template>

<style lang="less" scoped>
table {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  border-collapse: collapse;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

p.sect_labels {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 25px;
}
p.subsect_label {
  font-style: italic;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 5px;
}

h3 {
  margin-top: 40px;
  text-align: center;
}

table#debug_vals tr:nth-child(1) td {
  padding-top: 20px;
}
table#debug_vals tr:nth-last-child(1) td {
  padding-bottom: 20px;
}
table.debug#debug_vals {
  font-family: 'Courier New', monospace;
}
table.debug#debug_vals tr:nth-child(n+3) td:nth-child(1) {
  text-align: right;
  width: 275px;
}
table.debug#debug_vals tr:nth-child(n+3) td:nth-child(2) {
  text-align: left;
  width: 275px;
}
table.debug#debug_vals tr td {
  padding-left: 5px;
  padding-right:5px;
}

button#plus_1 {
  margin-left: 10px;
}
td#vdev_button {
  text-align: center;
}
td#add_disk {
  margin-top: 30px;
}
td#add_disk_button {
  vertical-align: top;
  padding-top: 5px;
  text-align: right;
}
td#tb_gb_button {
  vertical-align: top;
  padding-top: 5px;
  text-align: left;
  padding-left: 10px;
}
td#reset_button {
  text-align: center;
}
td#res_label {
  text-align: right;
}
td#res_input {
  text-align: left;
  padding-left: 10px;
}
td#status {
  padding-top: 10px;
  min-height: 5rem;
  text-align: center;
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
}

td#add_disk_buttons {
  text-align: center;
}

.rocker-button{
  width:30px;
  height:50px;
  border: 1px solid v-bind('themeVars.borderColor');
  background-color: v-bind('themeVars.inputColor');
  color: v-bind('themeVars.textColorBase');
  border-radius:4px;
  position:relative;
  border: 1px solid black;
  overflow:hidden;
  font-size:8px;
  display:inline-block;
  margin:0 3px;
  vertical-align:middle;
}

.add_disk_vrule{
  width:1px;
  height:52px;
  background: black;
  border-radius:4px;
  position:relative;
  overflow:hidden;
  display:inline-block;
  margin:0 3px;
  vertical-align:middle;
}

.half{
  width:100%;
  height:50%;
  position:absolute;
  left:0;
  text-align:center;
  cursor:pointer;
  transition:background .12s, transform .08s;
  user-select:none;
  z-index: 0;
}
.half.up{ top:-3px; }
.half.down{ bottom: -2px; }
.half.up:hover{ background:#E5E5E5; }
.half.down:hover{ background:#E5E5E5; }

.half.up:active,
.half.down:active{
  background:#f6f6f6;
}

.arrow{
  display:inline-block;
  font-size:12px;
  line-height:1;
  position:relative;
  top:50%;
  transform:translateY(-50%);
  pointer-events:none;
}

.center-text{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  pointer-events:none;
  z-index: 1;
}

th#first_ssd {
  border-style: solid;
  border-width: 3px 2px 2px 2px;
  border-color: #404040 white white white;
}
td#first_ssd {
  border-style: solid;
  border-width: 3px 0px 0px 0px;
  border-color: #404040 white white white;
}

th#lowest_custom_size {
  border-style: solid;
  border-width: 2px 2px 3px 2px;
  border-color: white white #404040 white;
}
td#lowest_custom_size {
  border-style: solid;
  border-width: 0px 0px 3px 0px;
  border-color: white white #404040 white;
}

table.debug#details {
  font-family: 'Courier New', monospace;
}
table.debug#details tr td {
  padding-left: 25px;
  padding-right:25px;
}
table.debug#details tr:nth-child(n+1) td {
  font-size: 15px;
}
table.debug#details tr td:nth-child(6) {
  width: 250px;
}

table.inputs tr td:nth-child(1) {
  padding-top: 5px;
  width: 275px;
  text-align: right;
}
table.inputs tr td:nth-child(2) {
  padding-top: 5px;
  width: 100px;
  text-align: left;
  padding-left: 10px;
}
table.inputs tr td:nth-child(3) {
  padding-top: 5px;
  width: 200px;
  text-align: right;
}
table.inputs tr td:nth-child(4) {
  padding-top: 5px;
  width: 275px;
  text-align: left;
  padding-left: 10px;
}

table.inputs tr td table.shelf_count tr td {
  text-align: center;
  width: 150px;
}
table.inputs tr td table.shelf_count tr td:nth-child(1) {
  text-align: right;
  font-weight: bold;
}
table.inputs tr td table.shelf_count tr:nth-child(1) {
  font-weight: bold;
}

label.tooltip {
  margin: 0 15px;
  color: rgb(121, 184, 206);
  border: 1px solid rgb(121, 184, 206);
  border-radius: 1em;
  padding: 0 8px;
  display: inline-block;
}

input[type=text] {
  width: 75px;
}

input.draid_settings {
  width: 35px;
  font-family: 'Courier New', monospace;
}
label.draid_settings {
  font-family: 'Courier New', monospace;
}
td#draid_settings {
  text-align: center;
}

th {
  padding-top: 5px;
  padding-bottom: 5px;
  border-style: solid;
  border-color: white;
  border-width: 2px;
}

td.results tr td {
  padding-top: 3px;
  padding-bottom: 3px;
  border-style: solid;
  border-color: white;
  border-width: 2px;
}

td.white {
  background-color: #ffffff;
  width: 100px;
}

table.results tr:nth-child(1) th {
  width: 150px;
}

table.results tr:nth-child(2) td {
  font-style: italic;
}

table.results {
  margin-bottom: 50px;
}

input {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid v-bind('themeVars.borderColor');
  background-color: v-bind('themeVars.inputColor');
  color: v-bind('themeVars.textColorBase');
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: v-bind('themeVars.hoverColor');
  }
}

button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid v-bind('themeVars.borderColor');
  background-color: v-bind('themeVars.buttonColor2');
  color: v-bind('themeVars.textColorBase');
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: v-bind('themeVars.buttonColor2Hover');
  }
}

select {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid v-bind('themeVars.borderColor');
  background-color: v-bind('themeVars.inputColor');
  color: v-bind('themeVars.textColorBase');
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: v-bind('themeVars.hoverColor');
  }
}

select option {
  padding: 0.5rem 1rem;
  background-color: v-bind('themeVars.bodyColor');
  color: v-bind('themeVars.textColorBase');
}

summary {
  font-size: 1.5em;
  padding: .5em;
}

/* Style for the container of tables with class "results" */
.results-container {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: .8em;
    scroll-behavior: smooth;
}

.results-container table.results th,
.results-container table.results td {
    border-top: none;
    border-bottom: none;
    border-left: 1px solid v-bind('themeVars.borderColor');
    border-right: 1px solid v-bind('themeVars.borderColor');
}

.results-container table.results td:first-child:empty {
    border: none !important;
    border-bottom: 1px solid transparent !important;
    background-color: v-bind('themeVars.bodyColor');
    cursor: default;
}

table.results {
    width: 99%;
    max-width: 99%;
    table-layout: auto;
}

.results-container table.results th {
    background-color: #0095d5;
    color: white;
    cursor: default;
}

.results-container table.results tr:nth-child(2) td {
    font-style: italic;
    font-size: 0.8em;
    color: white !important;
    cursor: default;
    line-height: 0.8em;
    background-color: v-bind('themeVars.buttonColor2');
}

.results-container table.results td {
    cursor: pointer;
}

.results-container table.results th#first_ssd,
.results-container table.results td#first_ssd {
  border-style: solid;
  border-bottom: 3px;
  border-color: v-bind('themeVars.borderColor');
}

/* End Style for the container of tables with class "results" */

/* Adjust class "debug" table from the capacity calculator */
table.debug {
    border-collapse: collapse;
    border: 1px solid #0095d5;
    width: 50% !important;
    margin: 0 auto;
}

table.debug tr {
    border: none !important;
}

table.debug th,
table.debug td {
    border: none;
    border-collapse: collapse;
    font-family: 'Courier New', Courier, monospace;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

table.debug td:nth-child(even) {
    text-align: left;
}

table.debug td:nth-child(odd) {
    text-align: right;
}

table.debug td:only-child {
    text-align: center;
    font-size: 1.2em;
    padding: .2em !important;
}

/* Hover effect for highlighting the current row in the "debug" table */
table.debug td:hover {
    background-color: #0095d5;
}

/* Reset hover effect for other tables or elements with class "debug" */
:not(table).debug tr:hover {
    background-color: initial;
}

/* End Adjust class "debug" table from the capacity calculator */
</style>
