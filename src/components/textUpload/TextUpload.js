import React, { Component } from "react";
import Table from "../table";
import Button from "../button";
import Input from "../input";
import "./style.css";

export default class TextUpload extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      delimiter: ",",
      lines: 4,
      content: []
    };
  }

  convertTxtToJson = txt => {
    return txt.split("\n").map(item => {
      return item.split(this.state.delimiter);
    });
  };

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var preview = document.getElementById("show-text");
      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();

      var textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = event => {
          this.setState({
            content: this.convertTxtToJson(event.target.result)
          });
        };
      } else {
        preview.innerHTML =
          "<span class='error'>It doesn't seem to be a text file!</span>";
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  };

  changeDelimeter = e => {
    this.setState({
      delimiter: e.target.value
    });
  };

  changeLines = e => {
    this.setState({
      lines: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input type="file" />
        <Button displayName="Upload" handleClick={this.showFile} />
        <div className="table-header">
          <Input
            value={this.state.delimiter}
            type="text"
            label="Delimiter"
            handleChange={this.changeDelimeter}
          />
          <Input
            value={this.state.lines}
            type="number"
            label="Lines"
            handleChange={this.changeLines}
          />
        </div>
        <Table rows={this.state.content} columnSize={this.state.lines} />
      </div>
    );
  }
}
