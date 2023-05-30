import React, { Component, PureComponent } from "react";

// PureComponent: Ghi nhớ lại kết quả trả ra của component
// Khi component bị hiển thị lại, nó sẽ kiểm tra giá trị state và props của component
// + Nếu giá trị bị thay đổi => Chạy lại quá trình hiển thị và ghi nhớ kết quả
// + Nếu giá trị không bị thay đổi => Sử dụng lại kết quả đã được ghi nhớ ở lần trước.

export default class Lifecycle extends PureComponent {
  constructor(props) {
    super(props);

    console.log("Constructor run");
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("Render run");

    return (
      <div>
        <h1>Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }

  // Chạy 1 lần duy nhất sau lần render đầu tiên - Tương đương useEffect(callback, [])
  // Thường dùng: call API, setState, DOM, addEventListener, setTimeout, setInterval,...
  componentDidMount() {
    console.log("ComponentDidMount run");
  }

  // Chạy sau mỗi lần render (trừ lần render đầu tiên)
  // Cung cấp 2 tham số prevProps, prevState thể hiện giá trị trước khi thay đổi của state hoặc props, dùng dể kiểm tra xem prop hoặc state nào bị thay đổi
  // Thường dùng: call API, setState, nhận được giá trị sau khi thay đổi của state và props để thực hiện một hành động nào đó
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate run");
    console.log("prev state, props:", prevState, prevProps);
    console.log("current state, props:", this.state, this.props);

    // Kiểm tra nếu state count bị thay đổi, thực hiện hành động
    if (prevState.count !== this.state.count) {
      alert(this.state.count);
    }
  }

  // Chạy trước khi component bị huỷ bỏ
  // Thường dùng: dọn dẹp các tác vụ như removeEventListener, clearTimeout,...
  componentWillUnmount() {
    console.log("ComponentWillUnmount run");
  }
}
