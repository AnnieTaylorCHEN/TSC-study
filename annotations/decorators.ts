class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }
  @logError('Oops the boat was sunk in ocean')
  pilot(): void {
    throw new Error()
  }
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value

    desc.value = function() {
      try {
        method()
      } catch (error) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()
