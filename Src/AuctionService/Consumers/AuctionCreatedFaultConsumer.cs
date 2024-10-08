﻿using Contracts;
using MassTransit;

namespace SearchService.Consumers
{
    public class AuctionCreatedFaultConsumer : IConsumer<Fault<AuctionCreated>>
    {
        public async Task Consume(ConsumeContext<Fault<AuctionCreated>> context)
        {
            Console.WriteLine("Consuming faulty Creation");
            var exception=context.Message.Exceptions.FirstOrDefault();

            if(exception.ExceptionType=="System.ArgumentException")
            {
                context.Message.Message.Model = "FooBar";
                await context.Publish(context.Message.Message);
            }
            else
            {
                Console.WriteLine("Not an argument exception- update error dashboard somewhere");
            }
        }
    }
}
